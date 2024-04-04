const greeting = 'welcome to 30days of react js'
const title ='let get started'
const hexColorGenerator = ()=>{
    const str='0123456789abcedf'
    let color=''
    // This loop runs 6 times to generate a 6-character hexadecimal color code
    for (let i =0;i<6;i++){
        //generates a random index from the length of the string
        let index = Math.floor(Math.random() * str.length)
        //extracts the str text according to the index e.g str[0]
        color += str[index]
        console.log(typeof str)
    }
    return '#' + color
}
const author={
    firstName:"asabeneh",
    lastName:"yahthe"
}
const Header =()=>{
    const paragraphStyles = {
        // backgroundColor={hexColorGenerator()},
        padding:'20px'
    }
    return <>
    {greeting}
    <p> color :{hexColorGenerator()}</p>

    <TechList/>
    </>
}

const TechList = ()=>{
    const techs = ['HTML', 'CSS', 'JavaScript']
    const formattedSkills= techs.map((tech)=>{
        return <li key={tech}>{tech}</li>
    })
    return formattedSkills;
}

export default Header;