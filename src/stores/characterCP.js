import { defineStore } from 'pinia'

export const useCharacterCPStore = defineStore('characterCP', {
  state: () => ({
    OC_CP: [
      {
        name: '中野伸司',
        engName: 'Nakano Shinji',
        CP_name: '秋田彌音',
        CP_icon: 'https://images.plurk.com/20Wgy2LnTmoxwXeAUTFSmg.png',
        images: ['']
      },
      {
        name: '艾德里安.菲茨傑拉德',
        engName: 'Adrian.Fitzgerald',
        CP_name: '席歐菲勒斯·萊昂',
        CP_icon: 'https://images.plurk.com/2ykIfRg8GbUN4Mcqa2SkTq.png',
        images: ['']
      },
      {
        name: '里歐瑞克.凱登',
        engName: 'Leoric.Caden',
        CP_name: '薇薇安',
        CP_icon: 'https://images.plurk.com/4nZFYGwNeeoJrxbyR0iGg7.png',
        images: ['']
      }
    ]
  })
})
