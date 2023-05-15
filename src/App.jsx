import Button from "./components/ui/Button/Button"
import Badge from "./components/ui/Badge/Badge";
import Input from "./components/ui/Input/Input";
import Userpic from "./components/ui/Userpic/Userpic";

function App() {

    let dummyHandler = (e) => {
        console.log(`Click`);
    }

    // type,                   // 'status', 'priority','kanban'
    // priority,               // 'normal', 'minor', 'major', 'critical'
    // status,                 // 'new', 'inprogress', 'paused', 'done'
    // compact = false,              
    // title,                  // badge title



    return (
        <>
            <h1>UI Components</h1>
            <h2>Badges</h2>
            <h3>Status badges</h3>
            <div className="inline-group">
                <Badge
                    type='status'
                    status='new'
                    title='New'
                />
                <Badge
                    type='status'
                    status='inprogress'
                    title='In progress'
                />
                <Badge
                    type='status'
                    status='paused'
                    title='Paused'
                />
                <Badge
                    type='status'
                    status='done'
                    title='Done'
                />
            </div>
            <h3>Priority badges</h3>
            <div className="inline-group">
                <Badge
                    type='priority'
                    priority='normal'
                    title='Normal'
                />
                <Badge
                    type='priority'
                    priority='normal'
                    title='Normal'
                    compact={true}
                />
                <Badge
                    type='priority'
                    priority='minor'
                    title='Minor'
                />
                <Badge
                    type='priority'
                    priority='minor'
                    title='Minor'
                    compact={true}
                />
                <Badge
                    type='priority'
                    priority='major'
                    title='Major'
                />
                <Badge
                    type='priority'
                    priority='major'
                    title='Major'
                    compact={true}
                />
                <Badge
                    type='priority'
                    priority='critical'
                    title='Critical'
                />
                <Badge
                    type='priority'
                    priority='critical'
                    title='Critical'
                    compact={true}
                />
            </div>
            <h3>Kanban badges</h3>
            <div className="inline-group">
                <Badge
                    type='kanban'
                    status='new'
                    title='New'
                />
                <Badge
                    type='kanban'
                    status='inprogress'
                    title='In progress'
                />
                <Badge
                    type='kanban'
                    status='paused'
                    title='Paused'
                />
                <Badge
                    type='kanban'
                    status='done'
                    title='Done'
                />
            </div>
            <h2>Buttons</h2>
            <h3>Main</h3>
            <div className="inline-group">
                <Button
                    style='main'
                    priority='primary'
                    shortcut='Shortcut'
                    onClick={dummyHandler}
                    title='Button'
                />
                <Button
                    style='main'
                    priority='secondary'
                    shortcut='Shortcut'
                    onClick={dummyHandler}
                    title='Button'
                />
                <Button
                    style='main'
                    priority='secondary'
                    shortcut='Shortcut'
                    onClick={dummyHandler}
                    title='Button'
                    disabled={true}
                />
            </div>
            <h3>Dropdown</h3>
            <Button
                style='dropdown'
                icon='filter'
                onClick={dummyHandler}
                title='Filter'
            />
            <h3>Ghost</h3>
            <div className="inline-group">
                <Button
                    style='ghost'
                    icon='fake'
                    onClick={dummyHandler}
                    title='Button'
                />
                <Button
                    style='ghost'
                    onClick={dummyHandler}
                    title='Button'
                />
                <Button
                    style='ghost'
                    size='small'
                    icon='fake'
                    onClick={dummyHandler}
                    title='Button'
                />

                <Button
                    style='ghost'
                    size='small'
                    onClick={dummyHandler}
                    title='Button'
                />
            </div>

            <h3>Round</h3>
            <div className="inline-group">
                <Button
                    style='round'
                    priority='primary'
                    icon='fake'
                    onClick={dummyHandler}
                />
                <Button
                    style='round'
                    priority='secondary'
                    icon='fake'
                    onClick={dummyHandler}
                />
                <Button
                    style='round'
                    priority='primary'
                    size='small'
                    icon='fake'
                    onClick={dummyHandler}
                />
                <Button
                    style='round'
                    priority='secondary'
                    size='small'
                    icon='fake'
                    onClick={dummyHandler}
                />
            </div>
            <h2>Input</h2>
            <h3>Text input</h3>
            <Input
                id='exampleInput'
                name='exampleInput'
                placeholder="Placeholder"
            />
            <h2>Userpic</h2>
            <h3>Userpic with image or text</h3>
            <div className="inline-group">
                <Userpic
                    img='./src/assets/images/userpic1.png'
                    username='Vasya'
                    size='large'
                />
                <Userpic
                    img='./src/assets/images/userpic2.png'
                    username='Kolya'
                    size='small'
                />
                <Userpic
                    username='Vasya'
                    size='large'
                />
                <Userpic
                    username='Kolya'
                    size='small'
                />
                <Userpic
                    size='large'
                />
                <Userpic
                    size='small'
                />
            </div>
        </>
    )
}

export default App;