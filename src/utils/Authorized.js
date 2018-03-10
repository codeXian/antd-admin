import RenderAuthorized from "ant-design-pro/lib/Authorized";
import { getAuthority } from "./authority";

let Authorized = RenderAuthorized(getAuthority())

export default Authorized;
