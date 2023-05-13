import Button from "./components/ui/Button/Button"

function App() {

    let dummyHandler = (e) => {
        console.log(`Click`);
    }

    return (
        
        <>
            <Button
                style='main'
                priority='primary'
                size='standard'
                shortcut='Shortcut111'
                onClick={dummyHandler}
                title="Okaaaay"
            />
        </>
    )
}

export default App;