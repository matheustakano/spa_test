class Router {

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href) // Pega o link no histórico atribuido na tag
    
        this.handle()
    }

    handle() {
        const { pathname }  = window.location
        const route = this.routes[pathname] || this.routes[404]
        console.log('antes do fetch')
    
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    
        console.log(route)
    }
}

export default new Router()