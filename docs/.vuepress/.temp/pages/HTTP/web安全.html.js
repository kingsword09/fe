export const data = {
  "key": "v-2dfe65d4",
  "path": "/HTTP/web%E5%AE%89%E5%85%A8.html",
  "title": "web 安全",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "参考资料",
      "slug": "参考资料",
      "children": []
    }
  ]
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
