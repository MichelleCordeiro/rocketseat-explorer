import { GithubUser } from './GithubUser.js'

// manipulação dos dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)

    this.load()

    GithubUser.search('MichelleCordeiro').then(user => console.log(user))
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  async add(username) {
    try {
      const userExists = this.entries.find(entry => entry.login === username)

      if (userExists) {
        throw new Error('Usuário já cadastrado!')
      }

      const user = await GithubUser.search(username)

      if (user.login === undefined) {
        throw new Error('Usuário não encontrado!')
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.save()
    } catch (error) {
      alert(error.message)
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login)
    // filter só retorna se for true, retornará users diferentes ao clicado p excluir

    this.entries = filteredEntries
    this.update()
    this.save()
  }
}

// exibição dos dados
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('#btn-fav')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('#input-search')

      this.add(value)
    }
  }

  update() {
    this.removeTrs()

    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Foto de ${user.login}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user .container-user p').textContent = user.name
      row.querySelector('.user .container-user span').textContent = user.login
      row.querySelector('.repo').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove-btn').onclick = () => {
        const isOK = confirm('Tem certeza que deseja remover essa linha?')

        if (isOK) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <a href="https://github.com/MichelleCordeiro.png" target="_blank">
          <div class="container-img">
            <img src="https://github.com/MichelleCordeiro.png" alt="Foto de Michelle Cordeiro">
          </div>
          <div class="container-user">
            <p>Michelle Cordeiro</p>
            <span>MichelleCordeiro</span>
          </div>
        </a>
      </td>
      <td class="repo">33</td>
      <td class="followers">333</td>
      <td class="remove">
        <button class="remove-btn">remover</button>
      </td>
    `

    return tr
  }

  removeTrs() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}
