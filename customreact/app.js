const container = React.createElement('div',{className:"main-heading",id:1},
    [
        React.createElement('section',{key:1},
            [
                React.createElement('p',{key:1},'React is declarative programming language because we just define what to do, react do itself '),
                React.createElement('img',{key:2, style:{width:'200px', backgroundColor:'teal',borderRadius:'20px',padding:'20px'}, src:'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'})
            ]
        )
    ])

let user = "Mohsin";
const h2 = <h2>Hello <b>{user}</b></h2>
{ <div id="root">
<div class="container" id="container">
    <section>
        <p>React is a JS library for building User Interface</p>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            style=
            {{
                width: "200px", backgroundColor: "black", borderRadius: "10px"

            }}
            />
    </section>
    <section>
        <form>
            <div className="input-group-1">
                <label htmlFor="username">username:</label>
                <input id="inputField1"/>
            </div>
            <div className="input-group-2">
                <label htmlFor="password">Password:</label>
                <input id="inputField2" type="password" />
            </div>
        </form>
    </section>
</div>
// </div> }


// const h2 = <h2>Hi JSX</h2>

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(h2)   
function reactFunc(reactElement, container){
    const creatElem = document.createElement
    (reactElement.type)
    creatElem.innerHTML = reactElement.children
    creatElem.setAttribute('href',reactElement.props.href)
    creatElem.setAttribute('target', reactElement.props.target)
    container.appendChild(creatElem);
}
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com/',
        target:'_blank'
    },
    children:'click me to open google'
}
let mainContainer = document.querySelector('#root')
reactFunc(reactElement,mainContainer)