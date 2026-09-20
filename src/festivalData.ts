/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FestivalConfig, FestivalId } from './types';

export const FESTIVAL_CONFIGS: Record<FestivalId, FestivalConfig> = {
  birthday: {
    id: 'birthday',
    name: '生日庆典',
    icon: '🎂',
    englishName: 'BIRTHDAY',
    englishTitle: 'HAPPY BIRTHDAY',
    musicTitle: 'Happy Birthday to You (8-Bit Box)',
    bannerTitle: 'HAPPY BIRTHDAY',
    bannerSubtitle: '星夜暖光生日礼即将送达',
    recipientLabel: '寿星尊称 Name (例如：最特别的你 / 亲爱的小宝):',
    defaultRecipient: '最特别的孩子',
    levelLabel: '年龄等级 Level (新的一岁等级):',
    levelPrefix: 'LEVEL',
    levelUnit: '岁',
    defaultLevel: 18,
    bgGradient: 'from-[#2E184A] via-[#5C2E75] to-[#25103d]',
    primaryColor: '#FF8FA3',
    accentColor: '#F7D070',
    envelopeTitle: '收到了神秘生日信件',
    envelopeSubtitle: '你收到了一份来自像素星空的包裹，点按打开你的专属信笺',
    envelopeBadge: 'LEVEL UP! +1 YEAR',
    envelopeTag: 'HAPPY BIRTHDAY LETTER',
    centerpieceTitle: '像素草莓双层奶油蛋糕',
    centerpieceSubtitle: '向粉紫像素星河许个愿，吹熄蛋糕上的蜡烛后即会出发',
    wishingWellTitle: '秘密星心许愿池 (Wishing Well)',
    wishingWellHint: '向粉紫像素星河许个愿，吹熄蛋糕上的蜡烛后即会出发',
    wishingActionText: '寄托生日愿望',
    wishingPlaceholder: '写下一个关于新一岁的心愿...',
    wishingSuccessEcho: '你的生日心愿已封存入像素星河，在新的一岁里终将汇成璀璨银河、默默守护着你！✨',
    loadingSystemName: 'BIRTHDAY SYSTEM LOADING...',
    loadingProgressMsgs: [
      '🌟 正在寻找星空中属于大寿星的完美像素因子...',
      '📡 连接星轨传送信道，提取专属好运辐射量...',
      '👾 正在调制星愿软泥，注入超级可爱的萌宠像素基因因子...',
      '🎂 调试魔法蜡烛、配置温馨火光与无限快乐参数...',
      '✉ 封存绝密璀璨祝福信件，已由像素诸神打上水晶封签...',
      '✨ 像素星空传送阵组装完毕！向着温暖星轨全速载入中... 🚀'
    ],
    blessingThemes: [
      {
        id: 'warm-heart',
        name: '温暖港湾',
        title: '致最亲爱、最特别的你 🌸',
        paragraphs: [
          '岁月的画笔，又在你的生命里悄然添上一抹温暖缤纷的色彩。',
          '愿你未来的日子里，所有的付出都会有甜美的收获与回响；',
          '愿你前行的每一个转角，都充满明媚的阳光和小确幸的快乐。',
          '在这个为你亮起生日星光的日子里，请放下所有生活的疲惫，',
          '尽情享受这份被爱、欢笑、甜点和惊喜包围的温暖时光。',
          '生日快乐！愿你此生无忧，所求皆所愿，所行皆坦途。'
        ],
        signature: '你挚爱的伙伴与朋友'
      },
      {
        id: 'star-dream',
        name: '璀璨星愿',
        title: '海风与漫天繁星的歌 🌌',
        paragraphs: [
          '悠长的风吹过蔚蓝海岛，漫天闪烁的星星在向你轻声歌唱。',
          '时光就像一颗神奇的种子，每一天都在你心田开出治愈快乐的小花。',
          '在新的一岁里，不需要总去拼命迎合世界，只管舒服快乐地做回自己。',
          '愿你不仅在今天，更在未来的每个清晨黄昏、四季交替之中，',
          '都能遇上让你发自内心微笑的风景，和简单、纯粹、温暖的人。',
          '愿你的生活永远有浪漫的事情发生，步履轻盈，快乐永伴。'
        ],
        signature: '来自云端的暖心来信'
      },
      {
        id: 'level-up',
        name: '星河极光',
        title: '恭喜升级！开启全新关卡 🚀',
        paragraphs: [
          '叮咚！伴随新一岁钟声敲响，你已完美解锁新一年度的成长增益！',
          '生命就像是一场奇妙的旅程，新的一页在向你闪烁，写满无限可能。',
          '愿你拥有一颗总是不觉疲倦的赤子之心，永远饱含探索世界的热望；',
          '愿你面对每一次挑战都能保持微笑，收获满格的快乐与无尽的动力。',
          '去追逐爱和梦想吧！去拥抱更广阔的原野，去活得自由而绚烂。',
          '生日快乐！愿你勇敢大步向前，沿途鲜花盛开，前路无限光明。'
        ],
        signature: '守护你的温馨星光'
      }
    ],
    defaultPhotos: [
      {
        id: 'b-1',
        title: 'Happy Birthday 🎂',
        subtitle: 'CHAPTER UNLOCKED',
        url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80',
        date: '2026.08.08',
        description: '解锁专属像素生日贺卡！愿新的一岁充满惊喜与无限快乐。',
        isCustomCover: true
      },
      {
        id: 'b-2',
        title: '草莓甜心 🍰',
        subtitle: '眨眼许下心愿',
        url: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=800&auto=format&fit=crop&q=80',
        date: '2026.08.08',
        description: '手拿小草莓与美味蛋糕，俏皮地眨一眨眼，把所有甜美与好运通通收进心底。'
      },
      {
        id: 'b-3',
        title: '璀璨星光 ✨',
        subtitle: '眼神自带光芒',
        url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80',
        date: '2026.10.01',
        description: '夜色渐浓，繁星与微光在眼眸深处流动，比所有的灯火都更加耀眼与浪漫。'
      }
    ],
    mascots: [
      { id: 'bear', name: '皮皮 bear', role: '小熊', phrase: '🧸 小熊皮皮祝你新的一岁快快乐乐，心想事成！', color: '#cd853f' },
      { id: 'bunny', name: '米米 bunny', role: '兔兔', phrase: '🐰 兔兔米米给你递上精心烘焙的香甜草莓大布丁 🍰！', color: '#ffe3ee' },
      { id: 'chick', name: '小七 chick', role: '小鸡', phrase: '🐥 叽叽小七发来全天候快乐电波，向着幸福全速进发！', color: '#fed330' }
    ]
  },

  mid_autumn: {
    id: 'mid_autumn',
    name: '中秋佳节',
    icon: '🥮',
    englishName: 'MID-AUTUMN',
    englishTitle: 'MID-AUTUMN FESTIVAL',
    musicTitle: '但愿人长久 (Moon Palace Lullaby)',
    bannerTitle: 'MID-AUTUMN FESTIVAL',
    bannerSubtitle: '月满人团圆 · 丹桂飘香送相思',
    recipientLabel: '团圆眷侣/亲友称呼 (例如：亲爱的家人 / 远方的知己):',
    defaultRecipient: '远方的挚友',
    levelLabel: '相伴岁月/团聚年份 (例如：相伴年数或中秋期许):',
    levelPrefix: 'YEAR',
    levelUnit: '载',
    defaultLevel: 5,
    bgGradient: 'from-[#1A1A3A] via-[#2F2760] to-[#120F2E]',
    primaryColor: '#F7D070',
    accentColor: '#FFB86C',
    envelopeTitle: '收到了月宫桂花寄语',
    envelopeSubtitle: '月光拂过天涯海角，为你送来一份带有桂花幽香的像素锦囊',
    envelopeBadge: 'MOONLIGHT BLESSING',
    envelopeTag: 'MID-AUTUMN LETTER',
    centerpieceTitle: '玉兔桂花金黄流心月饼',
    centerpieceSubtitle: '轻点玉兔月饼寄托相思，金黄色月芒将把思念送往远方',
    wishingWellTitle: '广寒月影许愿池 (Moon Wishing)',
    wishingWellHint: '向皎洁明月寄托心愿，玉兔将乘着月光将祝愿送达心田',
    wishingActionText: '寄托中秋心愿',
    wishingPlaceholder: '写下一个关于团圆、平安与相思的愿望...',
    wishingSuccessEcho: '玉兔已将你的心愿捧入桂树仙宫，但愿人长久，千里共婵娟！🌕🐇',
    loadingSystemName: 'MOON HARVEST LOADING...',
    loadingProgressMsgs: [
      '🌕 正在校准月宫广寒坐标，捕捉最纯净的秋夜清辉...',
      '🐇 玉兔正忙着捣制香甜金桂流心，装填满溢团圆因子...',
      '🏮 悬挂三十六盏像素流光灯笼，点亮万家灯火通明...',
      '🥮 烤制金黄松软月饼、配置桂花蜜露与温润祝福...',
      '✉ 封存千里婵娟信笺，以一抹皎洁月色为封印...',
      '✨ 月夜天桥搭建完成！携着秋夜微风全速降落中... 🍂'
    ],
    blessingThemes: [
      {
        id: 'moon-gather',
        name: '月满团圆',
        title: '但愿人长久，千里共婵娟 🌕',
        paragraphs: [
          '金秋九月，微风送爽，一轮明月悄然爬上静谧的夜空。',
          '无论此刻你身在天涯或是咫尺，愿这片月光能代我抚平你一身的辛劳。',
          '愿你尝到的每一块月饼都甘甜软糯，遇见的每一个明天都充满明媚期许。',
          '愿你眼里有星河清澈，身边有知己相拥，怀中有温暖与诗意。',
          '月圆之夜，阖家安康，愿所有的思念都有安放之处，所盼之人皆在身旁。',
          '中秋快乐！愿岁月温柔相待，生活常安，喜乐常伴。'
        ],
        signature: '遥寄思念的牵挂之人'
      },
      {
        id: 'osmanthus-wind',
        name: '金桂幽香',
        title: '桂花树下的秋夕长信 🍂',
        paragraphs: [
          '又是一年中秋至，秋风吹过弄堂小巷，带来满街淡淡的桂花清香。',
          '在这个象征圆满的节日里，最想念的依然是与你促膝长谈的欢声笑语。',
          '时光匆匆，人世多变，但心底那份深厚纯净的情谊却如玉盘般历久弥新。',
          '愿你在这个丰收的季节里，收获满满的安心、踏实与不期而遇的惊喜。',
          '今夜不妨抬头看看月亮吧，那抹温柔的光亮里，满是对你最真挚的祈愿。',
          '祝你中秋快乐，人间欢喜，万事胜意，岁岁常欢愉。'
        ],
        signature: '沐浴月光的故友'
      },
      {
        id: 'celestial-rhyme',
        name: '清辉朗月',
        title: '乘风归去，心安是吾乡 🌌',
        paragraphs: [
          '明月几时有？把酒问青天。古人望月思古，今人望月怀远。',
          '生活或有奔波与离散，但请相信，只要心中有光，便处处是故乡与温暖。',
          '愿你的心境常如秋水般澄澈宁静，愿你的脚步永远坚定而从容不迫。',
          '无论相隔千山万水，今晚我们都在同一片星空与皎月下，共同分享这份宁谧。',
          '把所有烦忧都交给晚风吹散吧，今夜只留欢喜与圆满在心间。',
          '祝中秋吉庆，平安喜乐，顺遂无忧，福泽绵长。'
        ],
        signature: '素月清风同伴者'
      }
    ],
    defaultPhotos: [
      {
        id: 'm-1',
        title: '月映人间 🌕',
        subtitle: 'MID-AUTUMN MOON',
        url: 'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?w=800&auto=format&fit=crop&q=80',
        date: '2026.09.25',
        description: '皎洁圆月悬于夜空，洒下一地霜华，将思念托付给迢迢清风。',
        isCustomCover: true
      },
      {
        id: 'm-2',
        title: '丹桂飘香 🍂',
        subtitle: '秋日私语',
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80',
        date: '2026.09.25',
        description: '金桂繁花点缀枝头，香气四溢，那是秋天最温暖甜蜜的馈赠。'
      },
      {
        id: 'm-3',
        title: '玉兔送福 🐇',
        subtitle: '团圆共婵娟',
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop&q=80',
        date: '2026.09.25',
        description: '一家人围坐品茗尝饼，欢声笑语穿透月夜，便胜却人间无数。'
      }
    ],
    mascots: [
      { id: 'bunny', name: '月兔 仙仙', role: '玉兔', phrase: '🐇 月兔仙仙为你捣出满钵桂花香，愿你中秋人月两团圆！', color: '#ffe3ee' },
      { id: 'bear', name: '团团 bear', role: '小熊', phrase: '🧸 团团熊抱着大大的流心五仁月饼来送福啦，甜甜美美！', color: '#cd853f' },
      { id: 'chick', name: '桂花 chick', role: '小鸡', phrase: '🐥 闻到桂花香了吗？小七祝你天天开心，福气满堂！', color: '#fed330' }
    ]
  },

  qixi: {
    id: 'qixi',
    name: '七夕佳节',
    icon: '🎋',
    englishName: 'QIXI',
    englishTitle: 'QIXI FESTIVAL',
    musicTitle: '鹊桥仙 (Magpie Bridge Starlight)',
    bannerTitle: 'QIXI FESTIVAL',
    bannerSubtitle: '迢迢牵牛星 · 皎皎河汉女 · 浪漫之约',
    recipientLabel: '心上人昵称 (例如：亲爱的 / 我最爱的宝):',
    defaultRecipient: '我最爱的人',
    levelLabel: '我们在一起已经 / 相伴相恋天数:',
    levelPrefix: '相恋第',
    levelUnit: '天',
    defaultLevel: 520,
    bgGradient: 'from-[#4D0D2E] via-[#751648] to-[#30051B]',
    primaryColor: '#FF6B8B',
    accentColor: '#FFD166',
    envelopeTitle: '收到了银河相思情笺',
    envelopeSubtitle: '鹊桥横跨漫漫银河，为你递上一封写满缱绻深情的像素情书',
    envelopeBadge: '相恋相守 · 执子之手',
    envelopeTag: 'ROMANTIC QIXI LETTER',
    centerpieceTitle: '璀璨同心星辰晶核',
    centerpieceSubtitle: '触碰发光的同心宝石，引爆漫天浪漫玫瑰花瓣与心形烟火',
    wishingWellTitle: '银河同心许愿池 (Love Well)',
    wishingWellHint: '向鹊桥星河许下一个白首之约，星辰皆会作证',
    wishingActionText: '寄托爱恋誓言',
    wishingPlaceholder: '写下一句想对TA说的甜蜜告白与承诺...',
    wishingSuccessEcho: '同心誓言已刻入星河！金风玉露一相逢，便胜却人间无数。💖💍',
    loadingSystemName: 'ROMANCE SYSTEM LOADING...',
    loadingProgressMsgs: [
      '🎋 正在连接银河两岸星轨，计算鹊桥最坚固的交汇角度...',
      '💖 捕捉 1314 颗漫游流星，注入满分纯粹爱意与心跳节奏...',
      '🌹 采摘三千朵晨露玫瑰，调制像素星海专属甜蜜香水...',
      '🕊 召唤喜鹊编织七彩羽翼，架起直通心扉的浪漫长桥...',
      '✉ 封存绝密心动告白信，已盖上唯你专属的红丝绒唇印封签...',
      '✨ 浪漫星河阵法全开！载着无尽温柔与爱意全力奔向你... 💫'
    ],
    blessingThemes: [
      {
        id: 'star-love',
        name: '心动如初',
        title: '致我生命中最耀眼的星辰 💖',
        paragraphs: [
          '迢迢牵牛星，皎皎河汉女。宇宙浩瀚无垠，而我何其有幸能与你相遇。',
          '在漫长岁月的人海茫茫里，你的出现，就像一道温暖而坚定的光，',
          '悄悄照亮了我每一个平凡普通的日子，让平凡的生活处处开满浪漫的花朵。',
          '喜欢和你一起分享清晨的第一缕晨曦，也喜欢同你看尽黄昏落日的温柔。',
          '今天不仅是七夕，更是我想第无数次告诉你：“有你在身边真好”的日子。',
          '愿执子之手，走过四季三餐，岁岁年年，深情不减，爱意长存。'
        ],
        signature: '永远为你心动的人'
      },
      {
        id: 'magpie-bridge',
        name: '两情相悦',
        title: '金风玉露，一往情深 🎋',
        paragraphs: [
          '有人说，爱是棋逢对手的默契；也有人说，爱是细水长流的守候。',
          '对我而言，爱就是每一个不经意间望向你时，眼底难以掩饰的笑意。',
          '感谢你走进我的世界，包容我的任性，分担我的不安，给予我无尽的勇气。',
          '未来的路很长，我只想把手放进你的掌心，无论风雨还是晴空，都一同走过。',
          '愿我们的故事永远没有终点，每一页都写满温柔、信任与长久的相知。',
          '七夕快乐，我最珍贵的人，愿所有的美好与深情，皆为你而来。'
        ],
        signature: '愿伴你白首之人'
      },
      {
        id: 'galaxy-promise',
        name: '银河誓言',
        title: '星河长明，不及你眼眸温柔 🌌',
        paragraphs: [
          '看过了漫天星辰的璀璨，才发现最美的星光，一直深藏在你的眼睛里。',
          '这世界上有千万种节日，但因为有你在身旁，每一个普通日子都成了节日。',
          '愿我们在柴米油烟里拥有诗意，在漫长光阴里拥有不褪色的热烈与欢喜。',
          '纵使时光流转，世事变迁，我依然会像第一天遇见你那样，满心欢喜奔向你。',
          '愿岁月悠长，山河无恙，我们并肩而立，看人间风月，赏世间繁花。',
          '七夕情人节快乐！我爱你，不只今天，更是往后余生的每一个日日夜夜。'
        ],
        signature: '痴心相守的另一半'
      }
    ],
    defaultPhotos: [
      {
        id: 'q-1',
        title: '初遇心动 💖',
        subtitle: 'LOVE STORY BEGINS',
        url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=80',
        date: '2026.08.19',
        description: '在最美好的时光遇见你，从此山河远阔，唯你是我的人间心动。',
        isCustomCover: true
      },
      {
        id: 'q-2',
        title: '漫步余晖 🌇',
        subtitle: '十指相扣',
        url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=80',
        date: '2026.08.19',
        description: '黄昏的日光将影子拉长，只想把手放进你的掌心，走过这一生的漫长岁月。'
      },
      {
        id: 'q-3',
        title: '星河许诺 💍',
        subtitle: '所爱隔山海，山海皆可平',
        url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop&q=80',
        date: '2026.08.19',
        description: '在漫天玫瑰花瓣与璀璨星河下，许下我们一生的长相厮守与温柔相待。'
      }
    ],
    mascots: [
      { id: 'bunny', name: '糖糖 bunny', role: '兔兔', phrase: '🐰 糖糖兔递给你一颗草莓爱心巧克力，今天也要甜度爆表呀！', color: '#ffe3ee' },
      { id: 'bear', name: '暖暖 bear', role: '小熊', phrase: '🧸 暖暖熊给你们送来最坚实的守护拥抱，祝长长久久、永结同心！', color: '#cd853f' },
      { id: 'chick', name: '鹊桥 chick', role: '小鸡', phrase: '🐥 喜鹊小七正在银河边架起鹊桥，有情人终成眷属！', color: '#fed330' }
    ]
  },

  new_year: {
    id: 'new_year',
    name: '新春佳节',
    icon: '🧧',
    englishName: 'NEW YEAR',
    englishTitle: 'HAPPY NEW YEAR',
    musicTitle: '步步高 · 恭喜发财 (Spring Festive Chime)',
    bannerTitle: 'HAPPY NEW YEAR',
    bannerSubtitle: '金蛇狂舞迎新岁 · 福星高照步步高',
    recipientLabel: '拜年对象尊称 (例如：亲爱的长辈 / 好兄弟 / 全家老少):',
    defaultRecipient: '亲爱的亲友家人',
    levelLabel: '新岁福气值/迎新年份 (例如：新年岁数或福气加成):',
    levelPrefix: 'YEAR',
    levelUnit: '年',
    defaultLevel: 2026,
    bgGradient: 'from-[#4D0D19] via-[#781829] to-[#360811]',
    primaryColor: '#FF4D4D',
    accentColor: '#FFD700',
    envelopeTitle: '收到一份新春开运大红包',
    envelopeSubtitle: '爆竹声声辞旧岁，红运满满迎新春！点击开启你的吉祥像素利市封',
    envelopeBadge: 'GONG XI FA CAI 2026',
    envelopeTag: 'SPRING FESTIVAL LETTER',
    centerpieceTitle: '招财进宝如意大红灯笼',
    centerpieceSubtitle: '点按吉祥红灯笼，千响黄金爆竹齐鸣，唤醒整年鸿运与满堂财气',
    wishingWellTitle: '新春聚宝祈福坛 (Fortune Well)',
    wishingWellHint: '向新春财神与福星祈愿，新的一年万事顺遂、平安暴富',
    wishingActionText: '寄托新年愿景',
    wishingPlaceholder: '写下新的一年对事业、学业、健康与财富的祝愿...',
    wishingSuccessEcho: '新春吉言已入天门！福禄寿喜财五星齐聚，祝你新岁大吉大利、暴富暴美！🧧💰',
    loadingSystemName: 'SPRING FESTIVAL LOADING...',
    loadingProgressMsgs: [
      '🧧 正在点燃千响开运黄金爆竹，噼里啪啦驱散旧岁霉运...',
      '🥟 厨房正包着藏有金币的热气腾腾水饺，香气满溢千家万户...',
      '🦁 醒狮腾跃舞动祥云，金鳞锦鲤在如意碧波中逆流而上...',
      '💰 调试招财摇钱树、配置财运亨通与大吉大利参数...',
      '✉ 封存大红烫金拜年锦囊，由财神爷亲手盖上纯金福印...',
      '✨ 新春祥瑞紫气东来！伴随着欢天喜地锣鼓声全速开启... 🎆'
    ],
    blessingThemes: [
      {
        id: 'new-year-fortune',
        name: '万象更新',
        title: '金龙腾跃，新春迎福大吉大利 🧧',
        paragraphs: [
          '辞暮尔尔，烟火年年。新的一年如期而至，万物复苏，大地回春。',
          '在辞旧迎新的美好时刻，向你致以最热烈、最温暖的新春祝福！',
          '愿新的一年里，你有始料不及的运气，也有突如其来的欢喜；',
          '愿你朝朝暮暮有钱有闲，平平安安顺遂无忧，钱包鼓鼓，笑口常开。',
          '所行化坦途，所求皆所愿，多喜乐，长安宁，岁无忧，新岁大吉！',
          '恭贺新禧！祝你新的一年龙马精神，财源滚滚，步步高升！'
        ],
        signature: '热烈给您拜年的亲友'
      },
      {
        id: 'reunion-blessing',
        name: '阖家团圆',
        title: '灯火可亲，围炉煮茶共贺新年 🏮',
        paragraphs: [
          '千家万户的爆竹声里，是对过去一年的告别，更是对崭新篇章的期许。',
          '桌上有热气腾腾的佳肴，身边有最至亲至爱的笑颜，便是人间最幸福的圆满。',
          '感谢有你的相伴与鼓励，让走过的每一步都踏实而坚定。',
          '愿新春的风吹去所有的疲惫与烦恼，带来满满的元气与前行的力量。',
          '愿家人长寿安康，朋友同心同行，日子过得红红火火，像蜜糖一样香甜。',
          '新年快乐！祝你吉星高照，万事如意，心想事成，福泽绵长。'
        ],
        signature: '深情祝福的挚友同行者'
      },
      {
        id: 'prosperous-path',
        name: '前程似锦',
        title: '大展宏图，乘风破浪启新程 🚀',
        paragraphs: [
          '旧岁已展千重锦，新年再进百尺竿！新的一年是一块崭新的画布，任你挥毫驰骋。',
          '愿你在新的一岁里，眼里有方向，脚下有力量，心中有天地。',
          '愿你的事业如芝麻开花节节高，愿你的梦想在汗水浇灌下璀璨绽放。',
          '不必瞻前顾后，只管放手一搏，好运与成功必将与你撞个满怀！',
          '去开辟属于你的一片璀璨天地吧，未来属于勇敢而充满热忱的你。',
          '祝新年行大运，生龙活虎，前程万里，锦绣宏图！'
        ],
        signature: '为你喝彩与加油的挚友'
      }
    ],
    defaultPhotos: [
      {
        id: 'ny-1',
        title: '红火新春 🧧',
        subtitle: 'HAPPY SPRING FESTIVAL',
        url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&auto=format&fit=crop&q=80',
        date: '2026.01.29',
        description: '大街小巷张灯结彩，红红火火迎新春，到处洋溢着欢快与喜庆。',
        isCustomCover: true
      },
      {
        id: 'ny-2',
        title: '锦鲤送喜 🎏',
        subtitle: '年年有余',
        url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800&auto=format&fit=crop&q=80',
        date: '2026.01.29',
        description: '包饺子、贴春联、放爆竹，热气腾腾的年味把冬夜彻底照亮。'
      },
      {
        id: 'ny-3',
        title: '灯火辉煌 🏮',
        subtitle: '阖家安康',
        url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=80',
        date: '2026.01.29',
        description: '璀璨华灯初上，全家欢聚一堂，共度这温馨甜蜜的守岁良宵。'
      }
    ],
    mascots: [
      { id: 'chick', name: '财神 chick', role: '小鸡', phrase: '🐥 金鸡报晓送金元宝，小七祝你财源广进、大发特发！', color: '#ffd700' },
      { id: 'bear', name: '福星 bear', role: '小熊', phrase: '🧸 福星大熊穿上红马褂给你作揖拜年啦：祝身体健康、万事顺遂！', color: '#ff4d4d' },
      { id: 'bunny', name: '如意 bunny', role: '兔兔', phrase: '🐰 如意兔兔蹦蹦跳跳送来吉祥如意糖，新春大吉！', color: '#ffe3ee' }
    ]
  },

  christmas: {
    id: 'christmas',
    name: '圣诞狂欢',
    icon: '🎄',
    englishName: 'CHRISTMAS',
    englishTitle: 'MERRY CHRISTMAS',
    musicTitle: 'Jingle Bells (Winter Bell Chime)',
    bannerTitle: 'MERRY CHRISTMAS',
    bannerSubtitle: '雪花轻舞铃儿响 · 暖炉热可可与壁炉礼物',
    recipientLabel: '收礼小可爱称呼 (例如：亲爱的朋友 / 圣诞小天使):',
    defaultRecipient: '亲爱的朋友',
    levelLabel: '圣诞快乐指数/心愿等级 (例如：心愿点数或期待值):',
    levelPrefix: 'LEVEL',
    levelUnit: '星',
    defaultLevel: 25,
    bgGradient: 'from-[#941B2C] via-[#5A0E19] to-[#24040A]',
    primaryColor: '#FF4D6D',
    accentColor: '#FFEAA7',
    envelopeTitle: '收到了来自北极圣诞邮局的特快专递',
    envelopeSubtitle: '红鼻驯鹿踏雪而来，为你送上一封沾着松针香气的圣诞像素明信片',
    envelopeBadge: 'NORTH POLE EXPRESS',
    envelopeTag: 'CHRISTMAS LETTER',
    centerpieceTitle: '雪顶挂满彩灯的魔法圣诞树',
    centerpieceSubtitle: '点亮树顶的金色伯利恒之星，漫天飘舞洁白无瑕的浪漫雪花',
    wishingWellTitle: '圣诞壁炉许愿袜 (Wish Stocking)',
    wishingWellHint: '在红白条纹袜子里悄悄塞入心愿，圣诞老人夜里会替你实现',
    wishingActionText: '投递圣诞心愿',
    wishingPlaceholder: '写下一份关于冬日、礼物与相聚的美好心愿...',
    wishingSuccessEcho: '叮叮当！圣诞老人与驯鹿鲁道夫已签收你的心愿，愿奇迹与暖意拥抱你！🎅🎁',
    loadingSystemName: 'CHRISTMAS TOY SHOP LOADING...',
    loadingProgressMsgs: [
      '🎄 正在从北极深林挑选最挺拔翠绿的冷杉，挂上彩球与铃铛...',
      '🦌 驯鹿鲁道夫正擦亮红色发光小鼻子，测试雪橇破空阻力...',
      '🍪 姜饼小人与棉花糖热可可刚出炉，给严寒冬日添上十倍温暖...',
      '🎁 精灵们正用红色丝带包装大盒礼物，偷偷塞进惊喜与爱心...',
      '✉ 封存圣诞邮局特派来信，敲上北极圈限定驯鹿雪花火漆...',
      '✨ 暴风雪停止，极光璀璨！乘着铃铛清脆回响全速滑向你... 🛷'
    ],
    blessingThemes: [
      {
        id: 'cozy-christmas',
        name: '暖冬奇迹',
        title: '叮叮当！愿所有的美好如雪花般降落 🎄',
        paragraphs: [
          '窗外是飘洒着轻盈雪花的寒冬，屋里是噼啪作响的壁炉与热气腾腾的红茶。',
          '在一年之中最浪漫梦幻的冬夜里，想把最温暖的问候送给最特别的你。',
          '愿圣诞老人的雪橇不仅为你装满精美的礼物，更载来满满的健康与快乐；',
          '愿你走过的每一个冬日都有人为你暖手，每一句问候都有深情回响。',
          '愿生活常有奇迹，所遇皆是良善，所伴皆是温暖。',
          'Merry Christmas！祝你圣诞快乐，冬日可爱，万物可期！'
        ],
        signature: '送来温暖圣诞帽的伙伴'
      },
      {
        id: 'gingerbread-sweet',
        name: '甜蜜姜饼',
        title: '壁炉旁的温软悄悄话 🍪',
        paragraphs: [
          '咬一口香脆甜美的肉桂姜饼，喝一口浮着厚厚奶泡的香浓热可可。',
          '时光在这一刻变得无比轻缓，把一年里所有的奔波辛苦都温柔抚平。',
          '谢谢你这一年里的陪伴与支持，你的存在就像圣诞树顶那颗璀璨的星辰。',
          '愿新年的钟声即将来临之际，带走你所有烦忧，只留下纯粹的喜悦。',
          '愿你永远葆有童心与好奇，永远对世界抱有天真而坚韧的热爱。',
          '圣诞快乐！愿你天天开心，笑脸比彩灯更明亮动人。'
        ],
        signature: '北极工坊守夜人'
      },
      {
        id: 'silent-night',
        name: '平安宁静',
        title: '平安夜，愿星光与你相拥入眠 ✨',
        paragraphs: [
          '平安夜的钟声悠扬回荡在静谧的大地上，星辰点点，万家安歇。',
          '在这个充满爱与感恩的时刻，愿一份深切的安宁悄然入你心怀。',
          '愿你今夜好梦连连，明日推开门，看见的是银装素裹的纯白仙境。',
          '愿未来的岁月如雪花般纯洁美好，你的每一步都踏在通往幸福的花园。',
          '去拥抱身边所爱之人吧，互道一声最真诚的平安与珍重。',
          '平安夜快乐，圣诞快乐！愿幸福与你长相厮守，岁岁年年。'
        ],
        signature: '为你祈愿平安的朋友'
      }
    ],
    defaultPhotos: [
      {
        id: 'c-1',
        title: '璀璨圣诞树 🎄',
        subtitle: 'MERRY CHRISTMAS',
        url: 'https://images.unsplash.com/photo-1543258103-a62bdc069871?w=800&auto=format&fit=crop&q=80',
        date: '2026.12.24',
        description: '彩灯闪耀，松针芬芳，树下堆满了写着你名字的精美惊喜礼物。',
        isCustomCover: true
      },
      {
        id: 'c-2',
        title: '飘雪微醺 ❄️',
        subtitle: '初冬浪漫',
        url: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=80',
        date: '2026.12.24',
        description: '在漫天飞舞的轻盈雪花中，戴着红围巾笑颜如花，将纯粹的温暖定格。'
      },
      {
        id: 'c-3',
        title: '暖炉热茶 ☕',
        subtitle: '岁末安歇',
        url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80',
        date: '2026.12.25',
        description: '捧一杯热气蒸腾的肉桂热茶，听着黑胶唱片，静享冬日的安逸与祥和。'
      }
    ],
    mascots: [
      { id: 'bear', name: '圣诞 bear', role: '小熊', phrase: '🧸 圣诞小熊戴着红白绒球帽给你送来超大礼物袜：快摸摸里面有啥！', color: '#e63946' },
      { id: 'bunny', name: '雪兔 bunny', role: '兔兔', phrase: '🐰 堆雪人打雪仗去咯！雪兔米米祝你圣诞天天都有惊喜！', color: '#ffe3ee' },
      { id: 'chick', name: '驯鹿 chick', role: '小鸡', phrase: '🐥 叮叮当~ 戴着鹿角的小七正在为你拉动快乐小雪橇！', color: '#fed330' }
    ]
  },

  memorial: {
    id: 'memorial',
    name: '纪念与感恩',
    icon: '🎓',
    englishName: 'MEMORIES',
    englishTitle: 'PRECIOUS MEMORY',
    musicTitle: '友谊地久天长 · 送别 (Auld Lang Syne)',
    bannerTitle: 'TIME CAPSULE',
    bannerSubtitle: '时光不老 · 我们不散 · 感恩有你相伴',
    recipientLabel: '相伴对象/同行伙伴 (例如：敬爱的导师 / 同窗知己 / 亲爱的你):',
    defaultRecipient: '同行共度的伙伴',
    levelLabel: '纪念周年/相伴年载 (例如：相识年数或毕业纪念):',
    levelPrefix: 'ANNIV',
    levelUnit: '载',
    defaultLevel: 3,
    bgGradient: 'from-[#1B2A47] via-[#2D4263] to-[#141E30]',
    primaryColor: '#64B5F6',
    accentColor: '#FFE082',
    envelopeTitle: '收到了一封时光胶囊纪念笺',
    envelopeSubtitle: '岁月翻过如歌篇章，将所有欢笑、汗水与感动装入这枚时光胶囊',
    envelopeBadge: 'TIMELESS MEMORY',
    envelopeTag: 'MEMORIAL LETTER',
    centerpieceTitle: '时光琉璃留声机',
    centerpieceSubtitle: '拨动复古唱针，让悠扬温暖的琴声带你重回那些闪闪发光的日子',
    wishingWellTitle: '星愿时光寄语瓶 (Time Bottle)',
    wishingWellHint: '向未来的彼此写下一句话，让光阴为我们的约定加冕',
    wishingActionText: '寄存在时光瓶中',
    wishingPlaceholder: '写下一句给未来或者感谢彼此陪伴的话语...',
    wishingSuccessEcho: '时光会流逝，但真挚的回忆永不褪色！愿我们历尽千帆，归来仍是少年。🌟📜',
    loadingSystemName: 'TIME CAPSULE LOADING...',
    loadingProgressMsgs: [
      '📜 正在翻开珍藏的岁月泛黄日记，整理每一格珍贵的记忆底片...',
      '🧭 调整时光罗盘指针，对准那年夏天阳光斑驳的树荫与欢笑...',
      '🎓 整理学士帽的流苏与沉甸甸的奖章，铭刻一路相扶相携的脚印...',
      '🎵 给留声机换上复古黑胶唱片，播放那首最熟悉的温暖旋律...',
      '✉ 封存绝密时光纪念信笺，以一抹金色星尘封印岁月荣光...',
      '✨ 时光之门缓缓开启！载着沉甸甸的感动与期许全速送达... ⏳'
    ],
    blessingThemes: [
      {
        id: 'gratitude-time',
        name: '感恩相遇',
        title: '致与我并肩同行、闪闪发光的你 ✨',
        paragraphs: [
          '时光如白驹过隙，回首来时路，多少风雨沉浮，皆化作眼底坦然的风景。',
          '何其有幸，在人生的这一段征途中，有你与我并肩作战，同甘共苦。',
          '感谢你每一次真挚的鼓励，感谢你无数个促膝长谈的深夜与清晨。',
          '因为有你的存在，那些原本平淡艰难的关卡，也变得格外精彩而难忘。',
          '时光不老，我们不散；青山不改，绿水长流。',
          '愿未来的每一个岁月转角，我们都能如约而至，继续写就属于我们的传奇。'
        ],
        signature: '与你并肩的挚友'
      },
      {
        id: 'graduation-future',
        name: '星辰大海',
        title: '跃入人海，做一朵奔涌向前的浪花 🌊',
        paragraphs: [
          '今天，我们在此刻为一段难忘的旅程画上圆满的句号，同时开启下一程的远方。',
          '走过的每一级台阶，流过的每一滴汗水，都在悄悄沉淀为你铠甲与羽翼。',
          '愿你永远保持对世界的好奇与热情，不随波逐流，不困于泥沼。',
          '去追寻属于你自己的风，去奔赴独属于你的一片星辰与大海！',
          '无论走到哪里，请记住，身后永远有一群默默为你守候、为你骄傲的人。',
          '毕业快乐！前路坦荡，顶峰相见！'
        ],
        signature: '母校与并肩同窗'
      },
      {
        id: 'anniversary-gentle',
        name: '岁月留白',
        title: '慢慢走，把风景都看透 🌿',
        paragraphs: [
          '生活最动人的不是轰轰烈烈的誓言，而是平凡日子里细水长流的相知与珍惜。',
          '这一路走来，春赏百花秋望月，夏纳凉风冬听雪，都有你的身影陪伴身旁。',
          '感谢生活的恩赐，也感谢彼此的坚守与包容。',
          '愿我们在往后的光阴里，依然能相视而笑，依然能在风雨中共撑一把小伞。',
          '愿日子越过越充实，心情越来越晴朗，生活常暖，岁月常青。',
          '纪念日快乐！愿我们步履从容，共赴往后的白首之约。'
        ],
        signature: '长情相伴的知音'
      }
    ],
    defaultPhotos: [
      {
        id: 'mem-1',
        title: '那年阳光 ☀️',
        subtitle: 'PRECIOUS MOMENTS',
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
        date: '2026.06.20',
        description: '蝉鸣声声的青葱岁月里，我们挥舞双手，把青春定格在这一刻灿烂的晴空。',
        isCustomCover: true
      },
      {
        id: 'mem-2',
        title: '静谧书香 📚',
        subtitle: '漫步画册角落',
        url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80',
        date: '2026.11.15',
        description: '倚靠在沉静温润的书架旁，翻阅着记忆画册，享受时光静静流淌的沉醉。'
      },
      {
        id: 'mem-3',
        title: '星海同行 🌌',
        subtitle: '历久弥新',
        url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80',
        date: '2026.10.01',
        description: '无论相隔多远，心底那份信任与情谊始终璀璨，像灯塔一般照亮彼此前行的路。'
      }
    ],
    mascots: [
      { id: 'bear', name: '学长 bear', role: '小熊', phrase: '🧸 抱抱！大熊祝你在新征途上披荆斩棘，闪闪发光！', color: '#cd853f' },
      { id: 'bunny', name: '时光 bunny', role: '兔兔', phrase: '🐰 时光兔将这段回忆精心存放在水晶瓶里，永远不褪色！', color: '#ffe3ee' },
      { id: 'chick', name: '向阳 chick', role: '小鸡', phrase: '🐥 向着太阳冲呀！小七永远做你最忠实的应援团！', color: '#fed330' }
    ]
  }
};

export const FESTIVAL_LIST: FestivalConfig[] = [
  FESTIVAL_CONFIGS.birthday,
  FESTIVAL_CONFIGS.mid_autumn,
  FESTIVAL_CONFIGS.qixi,
  FESTIVAL_CONFIGS.new_year,
  FESTIVAL_CONFIGS.christmas,
  FESTIVAL_CONFIGS.memorial
];
