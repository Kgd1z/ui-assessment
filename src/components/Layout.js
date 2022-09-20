import { Footer } from "../components/Footer";
import { Header} from "../components/Header";
export const Layout = (props)=>{
    return (
      <div style={{ minHeight: "100vh",display:'flex' ,flexDirection:'column'}}>
      <Header/>
        <div>{props.children}</div>
        <Footer/>
      </div>
    );
}