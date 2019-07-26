export default class MIPExample extends MIP.CustomElement {
  build () {
    let l = null
    /* eslint-disable */
    let p = function () {
      function e (a) {
        a = ('' + a).match(E)
        return !a ? l : new B(q(a[1]), q(a[2]), q(a[3]), q(a[4]), q(a[5]), q(a[6]), q(a[7]))
      }
      function z (a, e) {
        if (typeof a == null) {
          return encodeURI(a).replace(e, B) === 'string'
        } else {
          return l === 'string'
        }
      }
      function B (a) {
        a = a.charCodeAt(0)
        return '%' + '0123456789ABCDEF'.charAt(a >> 4 & 15) + '0123456789ABCDEF'.charAt(a & 15)
      }
      function y (a) {
        if (a === l) {
          return l
        }
        for (let a = a.replace(/(^|\/)\.(?:\/|$)/g, '$1').replace(/\/{2,}/g, '/'), e = m, b; (b = a.replace(e, '$1')) !== a; a = b) {
          return a
        }
      }
      function A (a, e) {
        let b = a.R()
        let g = e.K()
        g ? b.fa(e.j) : g = e.V()
        g ? b.ca(e.m) : g = e.W()
        g ? b.da(e.k) : g = e.Y()
        let m = e.g
        let k = y(m)
        if (g) {
          b.ba(e.T())
          k = k && k.replace(x, '')
        } else if (g = !!m) {
          if (47 !== k.charCodeAt(0)) {
            let k = y(b.g || '').replace(x, '')
            let s = k.lastIndexOf('/') + 1
            k = y((s ? k.substring(0, s) : '') + y(m)).replace(x, '')
          }
        } else {
          k = k && k.replace(x, '')
          k !== m && b.G(k)
          g ? b.G(k) : g = e.Z()
          g ? b.M(e.l) : g = e.X()
          g && b.ea(e.n)
          return b
        }
      }
      function b (a, e, b, g, m, k, s) {
        this.j = a
        this.m = e
        this.k = b
        this.h = g
        this.g = m
        this.l = k
        this.n = s
      }
      function q (a) {
        if (typeof a && a.length > 0) {
          return a === 'string'
        } else {
          return l === 'string'
        }
      }
      let m = RegExp(/(\/|^)(?:[^./][^/]*|\.{2,}(?:[^./][^/]*)|\.{3,}[^/]*)\/\.\.(?:\/|$)/)
      let x = /^(?:\.\.\/)*(?:\.\.$)?/
      b.prototype.toString = function () {
        let a = []
        l !== this.j && a.push(this.j, ':')
        l !== this.k && (a.push('//'), l !== this.m && a.push(this.m, '@'), a.push(this.k), l !== this.h && a.push(':', this.h.toString()))
        l !== this.g && a.push(this.g)
        l !== this.l && a.push('?', this.l)
        l !== this.n && a.push('#', this.n)
        return a.join('')
      }
      b.prototype.R = function () {
        return new B(this.j, this.m, this.k, this.h, this.g, this.l, this.n)
      }
      b.prototype.U = function () {
        return this.j && decodeURIComponent(this.j).toLowerCase()
      }
      b.prototype.fa =
        function (a) {
          if (a == null) {
            this.j = a
          } else {
            this.j = l
          }
        }
      b.prototype.K = function () {
        if (l !== this.j) {
          return true
        } else {
          return false
        }
      }
      b.prototype.ca = function (a) {
        if (a == null) {
          this.m = a
        } else {
          this.m = l
        }
      }
      b.prototype.V = function () {
        return l !== this.m
      }
      b.prototype.da = function (a) {
        if (a == null) {
          this.k = a
        } else {
          this.k = l
        }
        this.G(this.g)
      }
      b.prototype.W = function () {
        return l !== this.k
      }
      b.prototype.T = function () {
        return this.h && decodeURIComponent(this.h)
      }
      b.prototype.ba = function (a) {
        if (a) {
          a = Number(a)
          if (a !== (a & 65535)) {
            throw Error('Bad port number ' + a)
          }
          this.h = '' + a
        } else {
          this.h = l
        }
      }
      b.prototype.Y = function () {
        if (l !== this.h) {
          return true
        } else {
          return false
        }
      }
      b.prototype.S = function () {
        return this.g && decodeURIComponent(this.g)
      }
      b.prototype.G = function (a) {
        if (a == null) {
          a = '' + a
          if (this.g = !this.k || /^\//.test(a)) {
            this.g = a
          } else {
            this.g = '/' + a
          }
        } else {
          this.g = l
        }
      }
      b.prototype.M = function (a) {
        if (a == null) {
          this.l = a
        } else {
          this.l = l
        }
      }
      b.prototype.Z = function () {
        if (l !== this.l) {
          return true
        } else {
          return false
        }
      }
      b.prototype.aa = function (a) {
        if (typeof a === 'object' && !(a instanceof Array) && (a instanceof Object || Object.prototype.toString.call(a) !== '[object Array]')) {
          let e = []
          let b = -1
          let g
          for (g in a) {
            let m = a[g]
            'string' === typeof m && (e[++b] = g, e[++b] = m)
          }
          a = e
        }
        for (let e = [], b = '', k = 0; k < a.length;) {
          g = a[k++]
          m = a[k++]
          e.push(b, encodeURIComponent(g.toString()))
          b = '&'
          m && e.push('=', encodeURIComponent(m.toString()))
        }
        this.l = e.join('')
      }
      b.prototype.ea = function (a) {
        if (a == null) {
          this.n = a
        } else {
          this.n = l
        }
      }
      b.prototype.X = function () {
        return l !== this.n
      }
      let E = /^(?:([^:/?#]+):)?(?:\/\/(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/
      let D = /[#\/\?@]/g
      let F = /[\#\?]/g
      b.parse = e
      b.create = function (a, e, m, g, q, k, s) {
        a = new b(z(a, D), z(e, D), typeof m == 'string' ? encodeURIComponent(m) : l, 0 < g ? g.toString() : l, z(q, F), l, 'string' == typeof s ? encodeURIComponent(s) :l)
        k && ('string' === typeof k ? a.M(k.replace(/[^?&=0-9A-Za-z_\-~.%]/g, B)) : a.aa(k))
        return a
      }
      b.$ = A
      b.ja = y
      b.ua = {
        oa: function (a) {
          return /\.html$/.test(e(a).S()) ? 'text/html' : 'application/javascript'
        },
        $: function (a, b) {
          return a ? A(e(a), e(b)).toString() : '' + b
        }
      }
      return b
    }()
    let P = {
      e: {
        NONE: 0,
        URI: 1,
        URI_FRAGMENT: 11,
        SCRIPT: 2,
        STYLE: 3,
        HTML: 12,
        ID: 4,
        IDREF: 5,
        IDREFS: 6,
        GLOBAL_NAME: 7,
        LOCAL_NAME: 8,
        CLASSES: 9,
        FRAME_TARGET: 10,
        MEDIA_QUERY: 13
      }
    }
    P.atype = P.e
    P.w = {
      '*::class': 9,
      '*::dir': 0,
      '*::draggable': 0,
      '*::hidden': 0,
      '*::id': 4,
      '*::inert': 0,
      '*::itemprop': 0,
      '*::itemref': 6,
      '*::itemscope': 0,
      '*::lang': 0,
      '*::onblur': 2,
      '*::onchange': 2,
      '*::onclick': 2,
      '*::ondblclick': 2,
      '*::onerror': 2,
      '*::onfocus': 2,
      '*::onkeydown': 2,
      '*::onkeypress': 2,
      '*::onkeyup': 2,
      '*::onload': 2,
      '*::onmousedown': 2,
      '*::onmousemove': 2,
      '*::onmouseout': 2,
      '*::onmouseover': 2,
      '*::onmouseup': 2,
      '*::onreset': 2,
      '*::onscroll': 2,
      '*::onselect': 2,
      '*::onsubmit': 2,
      '*::ontouchcancel': 2,
      '*::ontouchend': 2,
      '*::ontouchenter': 2,
      '*::ontouchleave': 2,
      '*::ontouchmove': 2,
      '*::ontouchstart': 2,
      '*::onunload': 2,
      '*::spellcheck': 0,
      '*::style': 3,
      '*::tabindex': 0,
      '*::title': 0,
      '*::translate': 0,
      'a::accesskey': 0,
      'a::coords': 0,
      'a::href': 1,
      'a::hreflang': 0,
      'a::name': 7,
      'a::onblur': 2,
      'a::onfocus': 2,
      'a::shape': 0,
      'a::target': 10,
      'a::type': 0,
      'area::accesskey': 0,
      'area::alt': 0,
      'area::coords': 0,
      'area::href': 1,
      'area::nohref': 0,
      'area::onblur': 2,
      'area::onfocus': 2,
      'area::shape': 0,
      'area::target': 10,
      'audio::controls': 0,
      'audio::loop': 0,
      'audio::mediagroup': 5,
      'audio::muted': 0,
      'audio::preload': 0,
      'audio::src': 1,
      'bdo::dir': 0,
      'blockquote::cite': 1,
      'br::clear': 0,
      'button::accesskey': 0,
      'button::disabled': 0,
      'button::name': 8,
      'button::onblur': 2,
      'button::onfocus': 2,
      'button::type': 0,
      'button::value': 0,
      'canvas::height': 0,
      'canvas::width': 0,
      'caption::align': 0,
      'col::align': 0,
      'col::char': 0,
      'col::charoff': 0,
      'col::span': 0,
      'col::valign': 0,
      'col::width': 0,
      'colgroup::align': 0,
      'colgroup::char': 0,
      'colgroup::charoff': 0,
      'colgroup::span': 0,
      'colgroup::valign': 0,
      'colgroup::width': 0,
      'command::checked': 0,
      'command::command': 5,
      'command::disabled': 0,
      'command::icon': 1,
      'command::label': 0,
      'command::radiogroup': 0,
      'command::type': 0,
      'data::value': 0,
      'del::cite': 1,
      'del::datetime': 0,
      'details::open': 0,
      'dir::compact': 0,
      'div::align': 0,
      'dl::compact': 0,
      'fieldset::disabled': 0,
      'font::color': 0,
      'font::face': 0,
      'font::size': 0,
      'form::accept': 0,
      'form::action': 1,
      'form::autocomplete': 0,
      'form::enctype': 0,
      'form::method': 0,
      'form::name': 7,
      'form::novalidate': 0,
      'form::onreset': 2,
      'form::onsubmit': 2,
      'form::target': 10,
      'h1::align': 0,
      'h2::align': 0,
      'h3::align': 0,
      'h4::align': 0,
      'h5::align': 0,
      'h6::align': 0,
      'hr::align': 0,
      'hr::noshade': 0,
      'hr::size': 0,
      'hr::width': 0,
      'iframe::align': 0,
      'iframe::frameborder': 0,
      'iframe::height': 0,
      'iframe::marginheight': 0,
      'iframe::marginwidth': 0,
      'iframe::width': 0,
      'img::align': 0,
      'img::alt': 0,
      'img::border': 0,
      'img::height': 0,
      'img::hspace': 0,
      'img::ismap': 0,
      'img::name': 7,
      'img::src': 1,
      'img::usemap': 11,
      'img::vspace': 0,
      'img::width': 0,
      'input::accept': 0,
      'input::accesskey': 0,
      'input::align': 0,
      'input::alt': 0,
      'input::autocomplete': 0,
      'input::checked': 0,
      'input::disabled': 0,
      'input::inputmode': 0,
      'input::ismap': 0,
      'input::list': 5,
      'input::max': 0,
      'input::maxlength': 0,
      'input::min': 0,
      'input::multiple': 0,
      'input::name': 8,
      'input::onblur': 2,
      'input::onchange': 2,
      'input::onfocus': 2,
      'input::onselect': 2,
      'input::pattern': 0,
      'input::placeholder': 0,
      'input::readonly': 0,
      'input::required': 0,
      'input::size': 0,
      'input::src': 1,
      'input::step': 0,
      'input::type': 0,
      'input::usemap': 11,
      'input::value': 0,
      'ins::cite': 1,
      'ins::datetime': 0,
      'label::accesskey': 0,
      'label::for': 5,
      'label::onblur': 2,
      'label::onfocus': 2,
      'legend::accesskey': 0,
      'legend::align': 0,
      'li::type': 0,
      'li::value': 0,
      'map::name': 7,
      'menu::compact': 0,
      'menu::label': 0,
      'menu::type': 0,
      'meter::high': 0,
      'meter::low': 0,
      'meter::max': 0,
      'meter::min': 0,
      'meter::optimum': 0,
      'meter::value': 0,
      'ol::compact': 0,
      'ol::reversed': 0,
      'ol::start': 0,
      'ol::type': 0,
      'optgroup::disabled': 0,
      'optgroup::label': 0,
      'option::disabled': 0,
      'option::label': 0,
      'option::selected': 0,
      'option::value': 0,
      'output::for': 6,
      'output::name': 8,
      'p::align': 0,
      'pre::width': 0,
      'progress::max': 0,
      'progress::min': 0,
      'progress::value': 0,
      'q::cite': 1,
      'select::autocomplete': 0,
      'select::disabled': 0,
      'select::multiple': 0,
      'select::name': 8,
      'select::onblur': 2,
      'select::onchange': 2,
      'select::onfocus': 2,
      'select::required': 0,
      'select::size': 0,
      'source::type': 0,
      'table::align': 0,
      'table::bgcolor': 0,
      'table::border': 0,
      'table::cellpadding': 0,
      'table::cellspacing': 0,
      'table::frame': 0,
      'table::rules': 0,
      'table::summary': 0,
      'table::width': 0,
      'tbody::align': 0,
      'tbody::char': 0,
      'tbody::charoff': 0,
      'tbody::valign': 0,
      'td::abbr': 0,
      'td::align': 0,
      'td::axis': 0,
      'td::bgcolor': 0,
      'td::char': 0,
      'td::charoff': 0,
      'td::colspan': 0,
      'td::headers': 6,
      'td::height': 0,
      'td::nowrap': 0,
      'td::rowspan': 0,
      'td::scope': 0,
      'td::valign': 0,
      'td::width': 0,
      'textarea::accesskey': 0,
      'textarea::autocomplete': 0,
      'textarea::cols': 0,
      'textarea::disabled': 0,
      'textarea::inputmode': 0,
      'textarea::name': 8,
      'textarea::onblur': 2,
      'textarea::onchange': 2,
      'textarea::onfocus': 2,
      'textarea::onselect': 2,
      'textarea::placeholder': 0,
      'textarea::readonly': 0,
      'textarea::required': 0,
      'textarea::rows': 0,
      'textarea::wrap': 0,
      'tfoot::align': 0,
      'tfoot::char': 0,
      'tfoot::charoff': 0,
      'tfoot::valign': 0,
      'th::abbr': 0,
      'th::align': 0,
      'th::axis': 0,
      'th::bgcolor': 0,
      'th::char': 0,
      'th::charoff': 0,
      'th::colspan': 0,
      'th::headers': 6,
      'th::height': 0,
      'th::nowrap': 0,
      'th::rowspan': 0,
      'th::scope': 0,
      'th::valign': 0,
      'th::width': 0,
      'thead::align': 0,
      'thead::char': 0,
      'thead::charoff': 0,
      'thead::valign': 0,
      'tr::align': 0,
      'tr::bgcolor': 0,
      'tr::char': 0,
      'tr::charoff': 0,
      'tr::valign': 0,
      'track::default': 0,
      'track::kind': 0,
      'track::label': 0,
      'track::srclang': 0,
      'ul::compact': 0,
      'ul::type': 0,
      'video::controls': 0,
      'video::height': 0,
      'video::loop': 0,
      'video::mediagroup': 5,
      'video::muted': 0,
      'video::poster': 1,
      'video::preload': 0,
      'video::src': 1,
      'video::width': 0
    }
    P.ATTRIBS = P.w
    P.c = {
      OPTIONAL_ENDTAG: 1,
      EMPTY: 2,
      CDATA: 4,
      RCDATA: 8,
      UNSAFE: 16,
      FOLDABLE: 32,
      SCRIPT: 64,
      STYLE: 128,
      VIRTUALIZED: 256
    }
    P.eflags = P.c
    P.f = {
      a: 0,
      abbr: 0,
      acronym: 0,
      address: 0,
      applet: 272,
      area: 2,
      article: 0,
      aside: 0,
      audio: 0,
      b: 0,
      base: 274,
      basefont: 274,
      bdi: 0,
      bdo: 0,
      big: 0,
      blockquote: 0,
      body: 305,
      br: 2,
      button: 0,
      canvas: 0,
      caption: 0,
      center: 0,
      cite: 0,
      code: 0,
      col: 2,
      colgroup: 1,
      command: 2,
      data: 0,
      datalist: 0,
      dd: 1,
      del: 0,
      details: 0,
      dfn: 0,
      dialog: 272,
      dir: 0,
      div: 0,
      dl: 0,
      dt: 1,
      em: 0,
      fieldset: 0,
      figcaption: 0,
      figure: 0,
      font: 0,
      footer: 0,
      form: 0,
      frame: 274,
      frameset: 272,
      h1: 0,
      h2: 0,
      h3: 0,
      h4: 0,
      h5: 0,
      h6: 0,
      head: 305,
      header: 0,
      hgroup: 0,
      hr: 2,
      html: 305,
      i: 0,
      iframe: 4,
      img: 2,
      input: 2,
      ins: 0,
      isindex: 274,
      kbd: 0,
      keygen: 274,
      label: 0,
      legend: 0,
      li: 1,
      link: 274,
      map: 0,
      mark: 0,
      menu: 0,
      meta: 274,
      meter: 0,
      nav: 0,
      nobr: 0,
      noembed: 276,
      noframes: 276,
      noscript: 276,
      object: 272,
      ol: 0,
      optgroup: 0,
      option: 1,
      output: 0,
      p: 1,
      param: 274,
      pre: 0,
      progress: 0,
      q: 0,
      s: 0,
      samp: 0,
      script: 84,
      section: 0,
      select: 0,
      small: 0,
      source: 2,
      span: 0,
      strike: 0,
      strong: 0,
      style: 148,
      sub: 0,
      summary: 0,
      sup: 0,
      table: 0,
      tbody: 1,
      td: 1,
      textarea: 8,
      tfoot: 1,
      th: 1,
      thead: 1,
      time: 0,
      title: 280,
      tr: 1,
      track: 2,
      tt: 0,
      u: 0,
      ul: 0,
      'let': 0,
      video: 0,
      wbr: 2
    }

    P.ELEMENTS = P.f
    P.O = {
      a: 'HTMLAnchorElement',
      abbr: 'HTMLElement',
      acronym: 'HTMLElement',
      address: 'HTMLElement',
      applet: 'HTMLAppletElement',
      area: 'HTMLAreaElement',
      article: 'HTMLElement',
      aside: 'HTMLElement',
      audio: 'HTMLAudioElement',
      b: 'HTMLElement',
      base: 'HTMLBaseElement',
      basefont: 'HTMLBaseFontElement',
      bdi: 'HTMLElement',
      bdo: 'HTMLElement',
      big: 'HTMLElement',
      blockquote: 'HTMLQuoteElement',
      body: 'HTMLBodyElement',
      br: 'HTMLBRElement',
      button: 'HTMLButtonElement',
      canvas: 'HTMLCanvasElement',
      caption: 'HTMLTableCaptionElement',
      center: 'HTMLElement',
      cite: 'HTMLElement',
      code: 'HTMLElement',
      col: 'HTMLTableColElement',
      colgroup: 'HTMLTableColElement',
      command: 'HTMLCommandElement',
      data: 'HTMLElement',
      datalist: 'HTMLDataListElement',
      dd: 'HTMLElement',
      del: 'HTMLModElement',
      details: 'HTMLDetailsElement',
      dfn: 'HTMLElement',
      dialog: 'HTMLDialogElement',
      dir: 'HTMLDirectoryElement',
      div: 'HTMLDivElement',
      dl: 'HTMLDListElement',
      dt: 'HTMLElement',
      em: 'HTMLElement',
      fieldset: 'HTMLFieldSetElement',
      figcaption: 'HTMLElement',
      figure: 'HTMLElement',
      font: 'HTMLFontElement',
      footer: 'HTMLElement',
      form: 'HTMLFormElement',
      frame: 'HTMLFrameElement',
      frameset: 'HTMLFrameSetElement',
      h1: 'HTMLHeadingElement',
      h2: 'HTMLHeadingElement',
      h3: 'HTMLHeadingElement',
      h4: 'HTMLHeadingElement',
      h5: 'HTMLHeadingElement',
      h6: 'HTMLHeadingElement',
      head: 'HTMLHeadElement',
      header: 'HTMLElement',
      hgroup: 'HTMLElement',
      hr: 'HTMLHRElement',
      html: 'HTMLHtmlElement',
      i: 'HTMLElement',
      iframe: 'HTMLIFrameElement',
      img: 'HTMLImageElement',
      input: 'HTMLInputElement',
      ins: 'HTMLModElement',
      isindex: 'HTMLUnknownElement',
      kbd: 'HTMLElement',
      keygen: 'HTMLKeygenElement',
      label: 'HTMLLabelElement',
      legend: 'HTMLLegendElement',
      li: 'HTMLLIElement',
      link: 'HTMLLinkElement',
      map: 'HTMLMapElement',
      mark: 'HTMLElement',
      menu: 'HTMLMenuElement',
      meta: 'HTMLMetaElement',
      meter: 'HTMLMeterElement',
      nav: 'HTMLElement',
      nobr: 'HTMLElement',
      noembed: 'HTMLElement',
      noframes: 'HTMLElement',
      noscript: 'HTMLElement',
      object: 'HTMLObjectElement',
      ol: 'HTMLOListElement',
      optgroup: 'HTMLOptGroupElement',
      option: 'HTMLOptionElement',
      output: 'HTMLOutputElement',
      p: 'HTMLParagraphElement',
      param: 'HTMLParamElement',
      pre: 'HTMLPreElement',
      progress: 'HTMLProgressElement',
      q: 'HTMLQuoteElement',
      s: 'HTMLElement',
      samp: 'HTMLElement',
      script: 'HTMLScriptElement',
      section: 'HTMLElement',
      select: 'HTMLSelectElement',
      small: 'HTMLElement',
      source: 'HTMLSourceElement',
      span: 'HTMLSpanElement',
      strike: 'HTMLElement',
      strong: 'HTMLElement',
      style: 'HTMLStyleElement',
      sub: 'HTMLElement',
      summary: 'HTMLElement',
      sup: 'HTMLElement',
      table: 'HTMLTableElement',
      tbody: 'HTMLTableSectionElement',
      td: 'HTMLTableDataCellElement',
      textarea: 'HTMLTextAreaElement',
      tfoot: 'HTMLTableSectionElement',
      th: 'HTMLTableHeaderCellElement',
      thead: 'HTMLTableSectionElement',
      time: 'HTMLTimeElement',
      title: 'HTMLTitleElement',
      tr: 'HTMLTableRowElement',
      track: 'HTMLTrackElement',
      tt: 'HTMLElement',
      u: 'HTMLElement',
      ul: 'HTMLUListElement',
      'let': 'HTMLElement',
      video: 'HTMLVideoElement',
      wbr: 'HTMLElement'
    }
    P.ELEMENT_DOM_INTERFACES = P.O
    P.N = {
      NOT_LOADED: 0,
      SAME_DOCUMENT: 1,
      NEW_DOCUMENT: 2
    }
    P.ueffects = P.N
    P.J = {
      'a::href': 2,
      'area::href': 2,
      'audio::src': 1,
      'blockquote::cite': 0,
      'command::icon': 1,
      'del::cite': 0,
      'form::action': 2,
      'img::src': 1,
      'input::src': 1,
      'ins::cite': 0,
      'q::cite': 0,
      'video::poster': 1,
      'video::src': 1
    }
    P.URIEFFECTS = P.J
    P.L = {
      UNSANDBOXED: 2,
      SANDBOXED: 1,
      DATA: 0
    }
    P.ltypes = P.L
    P.I = {
      'a::href': 2,
      'area::href': 2,
      'audio::src': 2,
      'blockquote::cite': 2,
      'command::icon': 1,
      'del::cite': 2,
      'form::action': 2,
      'img::src': 1,
      'input::src': 1,
      'ins::cite': 2,
      'q::cite': 2,
      'video::poster': 1,
      'video::src': 2
    }
    P.LOADERTYPES = P.I
    /* eslint-disable */
    let ba = function (e) {
      function z (f) {
        if (G.hasOwnProperty(f)) {
          return G[f]
        }
        let a = f.match(Q)
        return a ? String.fromCharCode(parseInt(a[1], 10)) : (a = f.match(R)) ? String.fromCharCode(parseInt(a[1], 16)) : H && S.test(f) ? (H.innerHTML = '&' + f + ';', a = H.textContent, G[f] = a) : '&' + f + ';'
      }
      function B (f, a) { return z(a) }
      function y (f) {
        return f.replace(T, B)
      }
      function A (f) {
        return ('' + f).replace(U, '&amp;').replace(L, '&lt;').replace(M, '&gt;').replace(V, '&#34;')
      }
      function b (f) {
        return f.replace(W, '&amp;$1').replace(L, '&lt;').replace(M, '&gt;')
      }
      function q (f) {
        let a = { z: f.z || f.cdata, A: f.A || f.comment, B: f.B || f.endDoc, r: f.r || f.endTag, d: f.d || f.pcdata, F: f.F || f.rcdata, H: f.H || f.startDoc, v: f.v || f.startTag }
        return function (f, e) {
          let c
          let b = /(<\/|<\!--|<[!?]|[&<>])/g
          c = f + ''
          if (X) {
            c = c.split(b)
          } else {
            for (let i = [], h = 0, n; (n = b.exec(c)) !== l;) {
              i.push(c.substring(h, n.index))
              i.push(n[0])
              h = n.index + n[0].length
              i.push(c.substring(h))
              c = i
            }
          }
          x(a, c, 0, { o: !1, C: !1 }, e)
        }
      }
      function m (f, a, d, e, c) {
        return function () { x(f, a, d, e, c) }
      }
      function x (f, a, d, j, c) {
        try {
          f.H && 0 == d && f.H(c)
          for (let b, i, h, n = a.length; d < n;) {
            let r = a[d++], k = a[d]
            switch (r) {
              case '&':
                Y.test(k) ? (f.d && f.d('&' + k, c, t, m(f, a, d, j, c)), d++) : f.d && f.d('&amp;', c, t, m(f, a, d, j, c))
                break
              case '</':
                if (b = /^([-\w:]+)[^\'\']*/.exec(k)) {
                  if (b[0].length === k.length && '>' === a[d + 1]) {
                    d += 2, h = b[1].toLowerCase(), f.r && f.r(h, c, t, m(f, a, d, j, c))
                  } else {
                    let g = a
                    let o = d
                    let q = f
                    let s = c
                    let v = t
                    let y = j
                    let x = D(g, o)
                    x ? (q.r && q.r(x.name, s, v, m(q, g, o, y, s)), d = x.next) : d = g.length
                  }
                } else {
                  f.d && f.d('&lt;/', c, t, m(f, a, d, j, c))
                }
                break
              case '<':
                if (b = /^([-\w:]+)\s*\/?/.exec(k)) {
                  if (b[0].length === k.length && '>' === a[d + 1]) {
                    d += 2
                    h = b[1].toLowerCase()
                    f.v && f.v(h, [], c, t, m(f, a, d, j, c))
                    let z = e.f[h]
                    z & N && (d = E(a, { name: h, next: d, c: z }, f, c, t, j))
                  } else {
                    let g = a
                    let o = f
                    let q = c
                    let s = t
                    let v = j
                    let C = D(g, d)
                    C ? (o.v && o.v(C.name, C.P, q, s, m(o, g, C.next, v, q)), d = C.c & N ? E(g, C, o, q, s, v) : C.next) : d = g.length
                  }
                } else {
                  f.d && f.d('&lt;', c, t, m(f, a, d, j, c))
                }
                break
              case '<\!--':
                if (!j.C) {
                  for (i = d + 1; i < n && !('>' === a[i] && /--$/.test(a[i - 1])); i++) {
                    if (i < n) {
                      if (f.A) {
                        let A = a.slice(d, i).join('')
                        f.A(A.substr(0, A.length - 2), c, t, m(f, a, i + 1, j, c))
                      }
                      d = i + 1
                    } else {
                      j.C = !0
                    }
                  }
                }
                j.C && f.d && f.d('&lt;!--', c, t, m(f, a, d, j, c))
                break
              case '<!':
                if (/^\w/.test(k)) {
                  if (!j.o) {
                    for (i = d + 1; i < n && '>' !== a[i]; i++) {
                      if (i < n) {
                        d = i + 1
                      } else {
                        j.o = !0
                      }
                    }
                  }
                  j.o && f.d && f.d('&lt;!', c, t, m(f, a, d, j, c))
                } else {
                  f.d && f.d('&lt;!', c, t, m(f, a, d, j, c))
                }
                break
              case '<?':
                if (!j.o) {
                  for (i = d + 1; i < n && '>' !== a[i]; i++) {
                    if (i < n) {
                      d = i + 1
                    } else {
                      j.o = !0
                    }
                  }
                }
                j.o && f.d && f.d('&lt;?', c, t, m(f, a, d, j, c))
                break
              case '>':
                f.d && f.d('&gt;', c, t, m(f, a, d, j, c))
                break
              case '':
                break
              default:
                f.d && f.d(r, c, t, m(f, a, d, j, c))
            }
          }
          f.B && f.B(c)
        } catch (B) {
          if (B !== t) {
            throw B
          }
        }
      }
      function E (a, w, d, j, c, u) {
        let i = a.length
        I.hasOwnProperty(w.name) || (I[w.name] = RegExp('^' + w.name + '(?:[\\s\\/]|$)', 'i'))
        for (let h = I[w.name], n = w.next, r = w.next + 1; r < i && !('</' === a[r - 1] && h.test(a[r])); r++) {
          r < i && (r -= 1)
          i = a.slice(n, r).join('')
          if (w.c & e.c.CDATA) {
            d.z && d.z(i, j, c, m(d, a, r, u, j))
          } else if (w.c & e.c.RCDATA) {
            d.F && d.F(b(i), j, c, m(d, a, r, u, j))
          } else {
            throw Error('bug')
          }
          return r
        }
      }
      function D (a, b) {
        let d = /^([-\w:]+)/.exec(a[b]), j = {}
        j.name = d[1].toLowerCase()
        j.c = e.f[j.name]
        for (let c = a[b].substr(d[0].length), u = b + 1, i = a.length; u < i && '>' !== a[u]; u++)
          c += a[u]
        if (!(i <= u)) {
          for (let h = []; '' !== c;) {
            if (d = Z.exec(c)) {
              if (d[4] && !d[5] || d[6] && !d[7]) {
                for (let d = d[4] || d[6], n = !1, c = [c, a[u++]]; u < i; u++) {
                  if (n) {
                    if ('>' === a[u])
                      break
                  } else {
                    0 <= a[u].indexOf(d) && (n = !0)
                    c.push(a[u])
                  }
                }
                if (i <= u)
                  break
                c = c.join('')
              } else {
                let n = d[1].toLowerCase(), r
                if (d[2]) {
                  r = d[3]
                  let g = r.charCodeAt(0)
                  if (34 === g || 39 === g) {
                    r = r.substr(1, r.length - 2)
                  }
                  r = y(r.replace($, ''))
                } else {
                  r = ''
                  h.push(n, r)
                  c = c.substr(d[0].length)
                }
              }
            } else {
              c = c.replace(/^[\s\S][^a-z\s]*/, '')
            }
            j.P = h
            j.next = u + 1
            return j
          }
        }
      }
      function F (a) {
        function b (a, f) {
          j || f.push(a)
        }
        let d
        let j
        return q({
          startDoc: function () {
            d = []
            j = !1
          }, startTag: function (c, b, i) {
            if (!j && e.f.hasOwnProperty(c)) {
              let h = e.f[c]
              if (!(h & e.c.FOLDABLE)) {
                let n = a(c, b)
                if (n) {
                  if ('object' !== typeof n) {
                    throw Error('tagPolicy did not return object (old API?)')
                  }
                  if ('attribs' in n) {
                    b = n.attribs
                  } else {
                    throw Error('tagPolicy gave no attribs')
                  }
                  let g
                  'tagName' in n ? (g = n.tagName, n = e.f[g]) : (g = c, n = h)
                  if (h & e.c.OPTIONAL_ENDTAG) {
                    let k = d[d.length - 1]
                    k && k.D === c && (k.t !== g || c !== g) && i.push('</', k.t, '>')
                  }
                  h & e.c.EMPTY || d.push({ D: c, t: g })
                  i.push('<', g)
                  c = 0
                  for (k = b.length; c < k; c += 2) {
                    let m = b[c], w = b[c + 1]
                    w !== l && void 0 !== w && i.push(' ', m, '="', A(w), '"')
                  }
                  i.push('>')
                  h & e.c.EMPTY && !(n & e.c.EMPTY) && i.push('</', g, '>')
                } else
                  j = !(h & e.c.EMPTY)
              }
            }
          },
          endTag: function (a, f) {
            if (j) {
              j = !1
            } else if (e.f.hasOwnProperty(a)) {
              let b = e.f[a]
              if (!(b & (e.c.EMPTY | e.c.FOLDABLE))) {
                if (b & e.c.OPTIONAL_ENDTAG) {
                  for (b = d.length; 0 <= --b;) {
                    let h = d[b].D
                    if (h === a) {
                      break
                    }
                    if (!(e.f[h] & e.c.OPTIONAL_ENDTAG)) {
                      return
                    }
                  }
                } else {
                  for (b = d.length; 0 <= --b && d[b].D !== a;) {
                    if (!(0 > b)) {
                      for (h = d.length; --h > b;) {
                        let g = d[h].t
                        e.f[g] & e.c.OPTIONAL_ENDTAG || f.push('</', g, '>')
                      }
                      b < d.length && (a = d[b].t)
                      d.length = b
                      f.push('</', a, '>')
                    }
                  }
                }
              }
            }
          },
          pcdata: b,
          rcdata: b,
          cdata: b,
          endDoc: function (a) {
            for (; d.length; d.length--) {
              a.push('</', d[d.length - 1].t, '>')
            }
          }
        })
      }
      function a (a, b, d, e, c) {
        if (!c) {
          return l
        }
        try {
          let g = p.parse('' + a)
          if (g && (!g.K() || aa.test(g.U()))) {
            let i = c(g, b, d, e)
            return i ? i.toString() : l
          }
        } catch (h) { }
        return l
      }
      function v (a, b, d, e, c) {
        d || a(b + ' removed', { Q: 'removed', tagName: b })
        if (e !== c) {
          let g = 'changed'
          e && !c ? g = 'removed' : !e && c && (g = 'added')
          a(b + '.' + d + ' ' + g, { Q: g, tagName: b, ia: d, oldValue: e, newValue: c })
        }
      }
      function J (a, b, d) {
        b = b + '::' + d
        if (a.hasOwnProperty(b)) {
          return a[b]
        }
        b = '*::' + d
        if (a.hasOwnProperty(b)) {
          return a[b]
        }
      }
      function g (b, g, d, j, c) {
        for (let k = 0; k < g.length; k += 2) {
          let i = g[k]
          let h = g[k + 1]
          let n = h
          let m = l
          let o
          if ((o = b + '::' + i, e.w.hasOwnProperty(o)) || (o = '*::' + i, e.w.hasOwnProperty(o))) {
            m = e.w[o]
          }
          if (m !== l) {
            switch (m) {
              case e.e.NONE:
                break
              case e.e.SCRIPT:
                h = l
                c && v(c, b, i, n, h)
                break
              case e.e.STYLE:
                if ('undefined' === typeof s) {
                  h = l
                  c && v(c, b, i, n, h)
                  break
                }
                let q = []
                s(h, {
                  declaration: function (b, c) {
                    let f = b.toLowerCase()
                    O(f, c, d ? function (b) {
                      return a(b,
                        e.N.ga, e.L.ha, { TYPE: 'CSS', CSS_PROP: f }, d)
                    } : l)
                    c.length && q.push(f + ': ' + c.join(' '))
                  }
                })
                h = 0 < q.length ? q.join(' ; ') : l
                c && v(c, b, i, n, h)
                break
              case e.e.ID:
              case e.e.IDREF:
              case e.e.IDREFS:
              case e.e.GLOBAL_NAME:
              case e.e.LOCAL_NAME:
              case e.e.CLASSES:
                h = j ? j(h) : h
                c && v(c, b, i, n, h)
                break
              case e.e.URI:
                h = a(h, J(e.J, b, i), J(e.I, b, i), { TYPE: 'MARKUP', XML_ATTR: i, XML_TAG: b }, d)
                c && v(c, b, i, n, h)
                break
              case e.e.URI_FRAGMENT:
                h && '#' === h.charAt(0) ? (h = h.substring(1), h = j ? j(h) : h, h !== l && void 0 !== h && (h = '#' + h)) : h = l
                c && v(c, b, i, n, h)
                break
              default:
                h = l, c && v(c, b, i, n, h)
            }
          } else {
            h = l, c && v(c, b, i, n, h)
          }
          g[k + 1] = h
        }
        return g
      }
      function K (a, b, d) {
        return function (j, c) {
          if (e.f[j] & e.c.UNSAFE) {
            d && v(d, j, void 0, void 0, void 0)
          } else {
            return {
              attribs: g(j, c, a, b, d)
            }
          }
        }
      }
      function k (a, b) {
        let d = []
        F(b)(a, d)
        return d.join('')
      }
      let s, O
      'undefined' !== typeof window && (s = window.parseCssDeclarations, O = window.sanitizeCssProperty)
      let G = {
        lt: '<',
        LT: '<',
        gt: '>',
        GT: '>',
        amp: '&',
        AMP: '&',
        quot: '"',
        apos: '"',
        nbsp: '\u00a0'
      }
      let Q = /^#(\d+)$/, R = /^#x([0-9A-Fa-f]+)$/
      let S = /^[A-Za-z][A-za-z0-9]+$/
      let H = 'undefined' !== typeof window && window.document ? window.document.createElement('textarea') : l
      let $ = /\0/g
      let T = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g
      let Y = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/
      let U = /&/g
      let W = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi
      let L = /[<]/g
      let M = />/g
      let V = /\'/g
      let Z = /^\s*([-.:\w]+)(?:\s*(=)\s*((')[^']*('|$)|(')[^']*('|$)|(?=[a-z][-\w]*\s*=)|[^''\s]*))?/i
      let X = 3 === 'a,b'.split(/(,)/).length
      let N = e.c.CDATA | e.c.RCDATA
      let t = {}
      let I = {}
      let aa = /^(?:https?|mailto)$/i
      let o = {}
      o.ka = o.escapeAttrib = A
      o.la = o.makeHtmlSanitizer = F
      o.ma = o.makeSaxParser = q
      o.na = o.makeTagPolicy = K
      o.pa = o.normalizeRCData = b
      o.qa = o.sanitize = function (a, b, d, e) {
        return k(a, K(b, d, e))
      }
      o.ra = o.sanitizeAttribs = g
      o.sa = o.sanitizeWithPolicy = k
      o.ta = o.unescapeEntities = y
      return o
    }(P)
    return ba
    // window.define ? define(function () { return ba }) : (window.html_sanitizer = ba)
  }
}