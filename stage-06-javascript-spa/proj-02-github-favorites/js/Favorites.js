// classe p manipulaçao dos dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)

    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'MichelleCordeiro',
        name: 'Michelle Cordeiro',
        public_repos: '54',
        followers: '35'
      },
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '76',
        followers: '12000'
      },
      {
        login: 'diego3g',
        name: 'Diego Fernandes',
        public_repos: '44',
        followers: '222222'
      }
    ]
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

    console.log(filteredEntries)
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

    this.update();
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
