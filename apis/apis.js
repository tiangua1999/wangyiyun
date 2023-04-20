import axios from './axios.js'

const baseUrl = "http://47.113.230.184:7749"


// 1. 手机登录(现在要求验证,暂时绕不过,请使用二维码登录)
// 必选参数 :
// phone: 手机号码

// password: 密码

// 可选参数 :
// countrycode: 国家码，用于国外手机号登录，例如美国传入：1

// md5_password: md5 加密后的密码,传入后 password 参数将失效

// captcha: 验证码,使用 /captcha/sent接口传入手机号获取验证码,调用此接口传入验证码,可使用验证码登录,传入后 password 参数将失效

// 接口地址 : /login/cellphone

// 调用例子 : /login/cellphone?phone=xxx&password=yyy /login/cellphone?phone=xxx&md5_password=yyy /login/cellphone?phone=xxx&captcha=1234
export function getlogin(data){
	return axios({
		url:baseUrl + '/login/cellphone',
		data:data
	})
}

// 注册(修改密码)
// 说明 : 调用此接口 ,传入手机号码和验证码,密码,昵称, 可注册网易云音乐账号(同时可修改密码)

// 必选参数 :

// captcha: 验证码

// phone : 手机号码

// password: 密码

// nickname: 昵称

// 可选参数 :

// countrycode: 国家码，用于国外手机号，例如美国传入：1 ,默认 86 即中国

// 接口地址 : /register/cellphone

// 调用例子 : /register/cellphone?phone=13xxx&password=xxxxx&captcha=1234&nickname=binary1345

export function getzhuce(data){
	return axios({
		url:baseUrl + '/register/cellphone',
		data:data
	})
}

// 检测手机号码是否已注册
// 说明 : 调用此接口 ,可检测手机号码是否已注册
// 必选参数 :
// phone : 手机号码

// 可选参数 :
// countrycode: 国家码，用于国外手机号，例如美国传入：1 ,默认 86 即中国

// 接口地址 : /cellphone/existence/check

// 调用例子 : /cellphone/existence/check?phone=13xxx
export function getjczc(data){
	return axios({
		url:baseUrl + '/cellphone/existence/check',
		data:data
	})
}

// 退出登录
// 说明 : 调用此接口 , 可退出登录

// 调用例子 : /logout
export function gettuichu(data){
	return axios({
		url:baseUrl + '/logout',
		data:data
	})
}

// 登录状态
// 说明 : 调用此接口,可获取登录状态

// 接口地址 : /login/status
export function getzhuangtai(data){
	return axios({
		url:baseUrl + '/login/status',
		data:data
	})
}

// 获取用户详情
// 说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户详情

// 必选参数 : uid : 用户 id

// 接口地址 : /user/detail

// 调用例子 : /user/detail?uid=32953014
export function getyhxq(data){
	return axios({
		url:baseUrl + '/user/detail',
		data:data
	})
}

// 推荐歌单
// 说明 : 调用此接口 , 可获取推荐歌单

// 可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)

// 接口地址 : /personalized

// 调用例子 : /personalized?limit=1
export function gettjgd(data){
	return axios({
		url:baseUrl + '/personalized',
		data:data
	})
}

// 首页-发现
// 说明 : 调用此接口 , 可获取 APP 首页信息

// 接口地址 : /homepage/block/page
// 可选参数 : refresh: 是否刷新数据,默认为 false
// cursor: 上一条数据返回的 cursor
export function getfaxian(data){
	return axios({
		url:baseUrl + '/homepage/block/page',
		data:data
	})
}

// 搜索
// 说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
// 必选参数 : keywords : 关键词
// 可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
// 接口地址 : /search 或者 /cloudsearch(更全)
// 调用例子 : /search?keywords=海阔天空 /cloudsearch?keywords=海阔天空
export function getsousuo(data){
	return axios({
		url:baseUrl + '/cloudsearch',
		data:data
	})
}

// 歌单 ( 网友精选碟 )
// 说明 : 调用此接口 , 可获取网友精选碟歌单
// 可选参数 : order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
// cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
// limit: 取出歌单数量 , 默认为 50
// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
// 接口地址 : /top/playlist
// 调用例子 : /top/playlist?limit=10&order=new
export function getgedan(data){
	return axios({
		url:baseUrl + '/top/playlist',
		data:data
	})
}

// 歌单分类
// 说明 : 调用此接口,可获取歌单分类,包含 category 信息
// 接口地址 : /playlist/catlist
// 调用例子 : /playlist/catlist
export function getgdfl(data){
	return axios({
		url:baseUrl + '/playlist/catlist',
		data:data
	})
}

// 热门歌单分类
// 说明 : 调用此接口,可获取歌单分类,包含 category 信息
// 接口地址 : /playlist/hot
// 调用例子 : /playlist/hot
export function getrmgd(data){
	return axios({	
		url:baseUrl + '/playlist/hot',
		data:data
	})
}

// 获取精品歌单
// 说明 : 调用此接口 , 可获取精品歌单

// 可选参数 : cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从精品歌单标签列表接口获取(/playlist/highquality/tags)

// limit: 取出歌单数量 , 默认为 50

// before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据

// 接口地址 : /top/playlist/highquality

// 调用例子 : /top/playlist/highquality?before=1503639064232&limit=3
export function gethqjpgd(data){
	return axios({	
		url:baseUrl + '/top/playlist/highquality',
		data:data
	})
}

// 获取歌单详情
// 说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)

// 必选参数 : id : 歌单 id

// 可选参数 : s : 歌单最近的 s 个收藏者,默认为 8

// 接口地址 : /playlist/detail

// 调用例子 : /playlist/detail?id=24381616
export function gethqgdxq(data){
	return axios({	
		url:baseUrl + '/playlist/detail',
		data:data
	})
}

// 获取歌单所有歌曲
// 说明 : 由于网易云接口限制，歌单详情只会提供 10 首歌，通过调用此接口，传入对应的歌单id，即可获得对应的所有歌曲

// 必选参数 : id : 歌单 id

// 可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量

// 可选参数 : offset : 默认值为0

// 接口地址 : /playlist/track/all

// 调用例子 : /playlist/track/all?id=24381616&limit=10&offset=1
export function gethqgdsygq(data){
	return axios({	
		url:baseUrl + '/playlist/track/all',
		data:data
	})
}

// 获取歌词
// 说明 : 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )

// 必选参数 : id: 音乐 id

// 接口地址 : /lyric

// 调用例子 : /lyric?id=33894312
export function getgeci(data){
	return axios({	
		url:baseUrl + '/lyric',
		data:data
	})
}

// 获取每日推荐歌单
// 说明 : 调用此接口 , 可获得每日推荐歌单 ( 需要登录 )

// 接口地址 : /recommend/resource

// 调用例子 : /recommend/resource
export function gettuijiangedan(data){
	return axios({	
		url:baseUrl + '/recommend/resource',
		data:data
	})
}

// 获取每日推荐歌曲
// 说明 : 调用此接口 , 可获得每日推荐歌曲 ( 需要登录 )

// 接口地址 : /recommend/songs

// 调用例子 : /recommend/songs
export function gettuijiangequ(data){
	return axios({	
		url:baseUrl + '/recommend/songs',
		data:data
	})
}

// 默认搜索关键词
// 说明 : 调用此接口 , 可获取默认搜索关键词

// 接口地址 : /search/default
export function getmrssgjc(data){
	return axios({	
		url:baseUrl + '/search/default',
		data:data
	})
}

// 所有榜单
// 说明 : 调用此接口,可获取所有榜单 接口地址 : /toplist

// 调用例子 : /toplist

export function getallbangdan(data){
	return axios({	
		url:baseUrl + '/toplist',
		data:data
	})
}

// 所有榜单内容摘要
// 说明 : 调用此接口,可获取所有榜单内容摘要

// 接口地址 : /toplist/detail

// 调用例子 : /toplist/detail

export function getbddetail(data){
	return axios({	
		url:baseUrl + '/toplist/detail',
		data:data
	})
}
