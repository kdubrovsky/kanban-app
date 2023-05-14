import Button from "./components/ui/Button/Button"

function App() {

    let dummyHandler = (e) => {
        console.log(`Click`);
    }

    return (
        <>
            <h1>UI/Button</h1>
            <div>
                <h2>Main</h2>
                <h3>primary</h3>
                <Button
                    style='main'
                    priority='primary'
                    shortcut='Shortcut'
                    onClick={dummyHandler}
                    title='Button'
                />
                <h3>secondary</h3>
                <Button
                    style='main'
                    priority='secondary'
                    shortcut='Shortcut'
                    onClick={dummyHandler}
                    title='Button'
                />
                <h3>disabled</h3>
                <Button
                    style='main'
                    priority='secondary'
                    shortcut='Shortcut'
                    onClick={dummyHandler}
                    title='Button'
                    disabled={true}
                />
                <h2>Dropdown</h2>
                <Button
                    style='dropdown'
                    icon='filter'
                    onClick={dummyHandler}
                    title='Filter'
                />
                <h2>Ghost</h2>
                <h3>standard + icon</h3>
                <Button
                    style='ghost'
                    icon='fake'
                    onClick={dummyHandler}
                    title='Button'
                />
                <h3>standard</h3>
                <Button
                    style='ghost'
                    onClick={dummyHandler}
                    title='Button'
                />
                <h3>small + icon</h3>
                <Button
                    style='ghost'
                    size='small'
                    icon='fake'
                    onClick={dummyHandler}
                    title='Button'
                />
                <h3>small</h3>
                <Button
                    style='ghost'
                    size='small'
                    onClick={dummyHandler}
                    title='Button'
                />
                <h2>Round</h2>
                <h3>standard primary</h3>
                <Button
                    style='round'
                    priority='primary'
                    icon='fake'
                    onClick={dummyHandler}
                />
                <h3>small primary</h3>
                <Button
                    style='round'
                    priority='primary'
                    size='small'
                    icon='fake'
                    onClick={dummyHandler}
                />
                <h3>standard secondary</h3>
                <Button
                    style='round'
                    priority='secondary'
                    icon='fake'
                    onClick={dummyHandler}
                />
                <h3>small secondary</h3>
                <Button
                    style='round'
                    priority='secondary'
                    size='small'
                    icon='fake'
                    onClick={dummyHandler}
                />
            </div>
        </>
    )
}

export default App;