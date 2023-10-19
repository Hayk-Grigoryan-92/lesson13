import { useSelector } from "react-redux/es/hooks/useSelector";
import './style.scss'
import finish from '../../assets/images/finish.webp'

export const UserDetails = () => {

  return <div className="deatils" style={{backgroundImage:`url(${finish})`}}>Template Has Been Completed</div>;
};
