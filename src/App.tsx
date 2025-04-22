// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Logo from './components/Logo';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Logo />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
