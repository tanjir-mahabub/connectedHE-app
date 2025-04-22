import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to={'/'}>
            <div className='flex items-center justify-center bg-white gap-0.5 p-1'>
                <h1>ConnectedHE</h1>
                <Globe color='yellow' />
            </div>
        </Link>
    );
}

export default Logo;
