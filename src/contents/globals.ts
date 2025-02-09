/** 登录人的昵称 */
export const loginName = $('#Top .tools > a[href^="/member"]').text()

/** 发帖人的昵称 */
export const topicOwnerName = $('#Main > .box > .header > small > a[href^="/member"]').text()

export const $topicList = $(
  '#Main #Tabs ~ .cell.item, #Main #TopicsNode > .cell, #Main .cell.item:has(.item_title > .topic-link)'
)

/** 主题内容区 */
export const $topicContentBox = $('#Main .box:has(.topic_content)')

/** 主题下的评论区 */
export const $commentBox = $('#Main .box:has(.cell[id^="r_"])')

/** 评论区的回复 */
export let $commentCells = $commentBox.find('.cell[id^="r_"]')

export let $commentTableRows = $commentCells.find('> table > tbody > tr')

export function updateCommentCells() {
  $commentCells = $commentBox.find('.cell[id^="r_"]')
  $commentTableRows = $commentCells.find('> table > tbody > tr')
}

/** 回复输入控件 */
export const $replyBox = $('#reply-box')
export const $replyForm = $replyBox.find('form[action^="/t"]')

/** 当前页面使用的颜色模式：浅色 | 深色 */
export const colorTheme = $('#Wrapper').hasClass('Night') ? 'dark' : 'light'

/** 主题回复输入框 */
export const $replyTextArea = $('#reply_content')
export const replyTextArea = document.querySelector('#reply_content')
