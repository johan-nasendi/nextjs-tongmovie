import Image from "next/image"
import Logo from "../img/hulu-white.png"
import NavItem from "./NavItem"
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"
const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <NavItem title='HOME' Icon={HomeIcon} />
                <NavItem title='TRENDING' Icon={LightningBoltIcon} />
                <NavItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <NavItem title='COLLECTIONS' Icon={CollectionIcon} />
                <NavItem title='SEARCH' Icon={SearchIcon} />
                <NavItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <Image className="object-contain" src={Logo} width={200} height={100} />
        </header>
    )
}

export default Header 
