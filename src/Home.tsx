import {ManageButton} from '@js-smart/react-kit';
import {Button} from '@mui/material';
import reactLogo from './assets/react.svg'

export default function Home() {
    return (
        <div>
            <div>

                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <ManageButton onClick={() => console.log('Button clicked')}>Click me</ManageButton>
                <Button variant="contained" color="primary" sx={{mx: 2}}>Test Button </Button>
            </div>
        </div>
    );
}
