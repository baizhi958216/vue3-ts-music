import { Planet, Music, Video, Fm } from '@icon-park/vue-next'

interface IMenu {
    name: string;
    key: string;
    icon?: any
}

interface IMenus {
    name: string;
    menus: IMenu[]
}

export function useMenu() {
    const menus: IMenus[] = [
        {
            name: '在线音乐',
            menus: [
                {
                    name: '推荐',
                    key: 'discover',
                    icon: Planet
                },
                {
                    name: '电台',
                    key: 'dj',
                    icon: Fm
                },
                {
                    name: '音乐',
                    key: 'music',
                    icon: Music
                },
                {
                    name: '视频',
                    key: 'video',
                    icon: Video
                }
            ]
        },
        {
            name: '我的音乐',
            menus: []
        }
    ];
    return {
        menus
    }
}