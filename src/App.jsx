import Button from "./components/ui/Button/Button"

function App() {

    let dummyHandler = (e) => {
        console.log(`Click`);
    }

    return (
        <>
            <Button
                style='main'
                priority='secondary'
                size='standard'
                shortcut='Shortcut'
                icon='search'
                onClick={dummyHandler}
                title='Button'
                disabled={true}
            />
        </>
    )
}

export default App;