import { Blocks, BookUser, House, Info, Settings, UserPen, Workflow } from 'lucide-react';
import { v4 as uuid } from 'uuid';

type FieldProps = {
    label: string
    id: string
}

type SideBarProps = {
    icon: React.ReactNode;
} & FieldProps
export const SIDEBAR_MENU: SideBarProps[] = [
    {
        id: uuid(),
        label: 'home',
        icon: <House />
    },
    {
        id: uuid(),
        label: 'contacts',
        icon: <BookUser />
    },
    {
        id: uuid(),
        label: 'automations',
        icon: <Workflow />
    },
    {
        id: uuid(),
        label: 'integrations',
        icon: <Blocks />
    },
    {
        id: uuid(),
        label: 'settings',
        icon: <Settings />
    },
    {
        id: uuid(),
        label: 'profile',
        icon: <UserPen />
    },
    {
        id: uuid(),
        label: 'help',
        icon: <Info />
    }
]