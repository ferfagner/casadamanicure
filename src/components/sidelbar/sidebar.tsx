import {Container,OpenButton, IconOpen,Footer,Photo, Name, Icon,LogOut,MenuTilte, MenuContainer, MenuItem} from './stylersildebar'
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../context/auth'
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
interface SidebarProps{
    photo: string,
    name: string,
    perfil: number
}
import { MdAssignment } from "react-icons/md";
import { useState} from 'react'


export default function Sidebar({photo, name, perfil}:SidebarProps){
    const navigate = useNavigate()
    const {logOut} = useAuth()
    const[sidebarActiv, setSidebarActivi] = useState(false)
    function logout (){

        logOut()

        navigate('/')
    }
    

    return(
        <>
        <OpenButton isActivy={sidebarActiv} onClick={()=> {setSidebarActivi(!sidebarActiv)}}>
        <IconOpen>{sidebarActiv ?
        <MdKeyboardDoubleArrowLeft/>:
            <MdKeyboardDoubleArrowRight/>
        }
        </IconOpen>
    </OpenButton>
        <Container sidebarOpen={sidebarActiv}>
            <Photo src={photo}/>
            <Name>{name}</Name>
            <MenuContainer>
                 <MenuItem>
                <Icon>
                <MdAssignment/>
                </Icon>
                <MenuTilte href={perfil ==1 ? '/dashboardAdmin' :'/dashboard'}>Dashboard</MenuTilte>
                </MenuItem>

                <MenuItem>
                <Icon>
                <MdAssignment/>
                </Icon>
                <MenuTilte href='#'>Manuais</MenuTilte>
                </MenuItem>

                <MenuItem>
                <Icon>
                <MdAssignment/>
                </Icon>
                <MenuTilte>Alterar Perfil</MenuTilte>
                </MenuItem>

                {perfil > 0 ? 
                <>
                <MenuItem>
                <Icon>
                <MdAssignment/>
                </Icon>
                <MenuTilte href='/cadastroFunc'>Cadastrar Funcionário</MenuTilte>
                </MenuItem>
                <MenuItem>
                <Icon>
                <MdAssignment/>
                </Icon>
                <MenuTilte  href='/cadastroLoja'>Cadastrar Loja</MenuTilte>
                </MenuItem>
                <MenuItem>
                <Icon>
                <MdAssignment/>
                </Icon>
                <MenuTilte>Cadastrar Parceiro</MenuTilte>
                </MenuItem>
                <MenuItem>
                <Icon>
                <MdAssignment/>
                </Icon>
                <MenuTilte>Cadastrar Slide</MenuTilte>
                </MenuItem>
                </>
                : 
                <></>

                }
                
                
            </MenuContainer>
            <Footer>
            <LogOut onClick={()=>logout()}>
                Sair
            </LogOut>
            </Footer>
        </Container>
        </>
    )
}