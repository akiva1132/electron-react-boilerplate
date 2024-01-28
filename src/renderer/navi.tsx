import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const Navi2 = () => {
    const navigate = useNavigate();
    useEffect(() => {
          navigate('/');
      }, []);
    return <div></div>
}