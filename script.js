
let theme = localStorage.getItem('theme')
if(theme == null){
    setTheme('light')
}else{
    setTheme(theme )
}

let themedot = document.getElementsByClassName('theme-dot')

for (var i=0; themedot.length > i; i++ ){

themedot[i].addEventListener('click',function(){
    let mode = this.dataset.mode
    console.log('option clicked...', mode)
    setTheme(mode)
})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'style.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'theme-2.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'theme-3.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'theme-4.css'
	}

	localStorage.setItem('theme', mode)
}