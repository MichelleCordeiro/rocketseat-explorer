export class GithubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`

    return fetch(endpoint)
    .then(data => data.json())
    // .then(data => ({
    //   login: data.login,
    //   name: data.name,
    //   public_repos: data.public_repos,
    //   followers: data.followers
    // }))
    // desestruturado
    .then(({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers
    }))
  }
}

// classe p manipulaçao dos dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()

    GithubUser.search('maykbrito').then(user => console.log(user))
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    // console.log(this.entries)
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  async add(username) {
    try {
      // GithubUser.search(username).then( user => { ... })
      const user = await GithubUser.search(username)
      
      if(user.login === undefined) {
        throw new Error('Usuário não encontrado!')
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.save()
      
    } catch(error) {
      alert(error.message)
    }
  }

  delete(user) {
    // principio da imutabilidade: não alterar o elemento original, criar um novo alterado
    // filter qdo true mantem(retorna) o dado e qdo false não retorna o dado
    // user do array !== do user clicado TRUE mantem
    // user do array !== do user clicado FALSE não retorna esse user (será 'deletado')
    const filteredEntries = this.entries
      .filter(entry => 
        // console.log(entry)
        entry.login !== user.login
      )

    // console.log(filteredEntries)
    this.entries = filteredEntries
    this.update()
    this.save()
  }
}

// classe manipulação do HTML
// 'extends' herança (FavoritesView herda de Favorites)  
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)   // liga a classes pai

    this.tbody = this.root.querySelector('table tbody')
    // retorna um NodeList q e um array like (parece um array)
    // console.log(tbody.querySelectorAll('tr'))
    // console.log(this.root)

    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      // const input = this.root.querySelector('.search input')
      // console.dir(input)
      const { value } = this.root.querySelector('.search input')
      // console.log(value)

      this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    this.entries.forEach( user => {
      // console.log(user)
      const row = this.createRow()
      // console.log(row)

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      // o onclick é p uso único, só poderá ser usado uma vez. Alternativa a ele é o addEventListenner
      row.querySelector('.remove-btn').onclick = () => {
        const isOK = confirm('Tem certeza que deseja apagar essa linha?')

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
        <img src="https://github.com/diego3g.png" alt="Foto de Diego Fernandes">
        <a href="https://github.com/diego3g" target="_blank">
          <p>Diego Fernandes</p>
          <span>diego3g</span>
        </a>
      </td>
      <td class="repositories">48</td>
      <td class="followers">2253</td>
      <td class="remove">
        <button class="remove-btn">&times;</button>
      </td>
    `

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
      .forEach(tr => {
        tr.remove()
    })
  }
}
