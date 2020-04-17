import Render from './render';
import Style from './style';

class MungView extends Render{
  constructor({
    el, data
  }) {
    if (!el) {
      throw 'empty "el" property'
    }
    super()
    this.el = el
    this.data = data

    let isValidation = this.validation()
    if (!isValidation) { 
      alert('필수항목 부족(title, price, estimatedPeriod, date, explain, category, deadLine, joined, view, commends, like)')
      throw 'parameter 부족'
    }
    this.render()
    const S = new Style(el)
  }

  validation () {
    for (let data of this.data) {
      if (!data.title || !data.price || !data.estimatedPeriod || !data.date || !data.explain || !data.category || !data.deadLine || !data.joined || !data.view || !data.commends || !data.like) {
        return 0
      }
    }
    return -1
  }

  render() {
    const root = document.getElementById(this.el.replace('#', ''))
    root.className="mung-list-view"

    const ul = document.createElement('ul')

    this.data
      .map(item => this.cItem(item))
      .forEach(item => ul.appendChild(item))
    
    root.appendChild(ul)
  }

  // rerender(data) {
  //   let root = document.getElementById(this.el.replace('#', ''))
  //   root.remove()
  //   root = document.createElement('div')
  //   root.setAttribute("id", this.el.replace('#', '')) 
  //   root.className="mung-list-view"
  //   this.data = data

  //   const ul = document.createElement('ul')

  //   this.data
  //     .map(item => this.cItem(item))
  //     .forEach(item => ul.appendChild(item))
  //   document.appenddChild(root)
  //   root.appendChild(ul)
  // }

  cItem(data) {
    let item = document.createElement('li')

    let title = this.title({title: data.title, badges: data.badges || []})
    let subDesc = this.subDesc({
      price: data.price, estimatedPeriod: data.estimatedPeriod, date: data.date,
    })
    let bodyDesc = this.bodyDesc({
      explain: data.explain, deadLine: data.deadLine, joined: data.joined
    })
    let footer = this.footer({tags: data.tags || [], category: data.category, view: data.view, commends: data.commends, like: data.like})
    
    item.appendChild(title)
    item.appendChild(subDesc)
    item.appendChild(bodyDesc)
    item.appendChild(footer)
    
    return item
  }
};

export default MungView;