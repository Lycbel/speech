class API {
  constructor(bus) {
    this.bus = bus
  }
  async fetchSpeechList(startDate, endDate, query, pageNumber, pageLimit) {
    this.bus.$emit('lock')
    console.log('need to lock the screen')
    await timeout(1000)
    this.bus.$emit('unlock')
    return speechData
  }
  fetchTutorList(query) {
    return tutorData
  }
  async fetchTutorSuggestionList(query) {
    // todo to make sure after adding tutor, the current tutor will be here the latest one must be at first
    // maybe the ones after the first need another order method
    await timeout(1000)
    let totalData = TutorSList
    let result
    if (!query || query === '') {
      result = totalData
    } else {
      result = totalData.filter((el) => {
        return el.name.startsWith(query)
      })
    }
    let finalResult = []
    result.forEach((el) => {
      finalResult.push({value: el.name, id: el.id})
    })
    return finalResult
  }
}
export default API
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let TutorSList = [{name: 'name1', id: 1}, {name: '任正非', id: 2}, {name: '沈老板', id: 3}, {name: 'u呼呼', id: 4}, {name: '莎士比亚', id: 5}, {name: 'name5', id: 6}]

let speechData = {
  total: 100,
  data: [{
    id: '1',
    name: '云服务的扩容',
    tutor: 'andy',
    tutorId: 1,
    videoUrl: '123a.com',
    date: '2016-12-12',
    tags: ['AI', 'ML', 'DS'],
    desc: 'hello hello hello ',
    link: 'hhh.com',
    picSrc: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_582,c_limit/phonepicutres-TA.jpg'
  }, {
    id: '2',
    name: '云服务的扩容1',
    tutor: 'andy',
    tutorId: 1,
    videoUrl: '12s3.com',
    date: '2016-12-12',
    tags: ['AI', 'ML', 'DS'],
    desc: 'hello hello hello ',
    link: 'hhh.com',
    picSrc: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_582,c_limit/phonepicutres-TA.jpg'
  }, {
    id: '3',
    name: '云服务的扩容2',
    tutor: 'andy',
    tutorId: 1,
    videoUrl: '123s.com',
    date: '2016-12-13',
    tags: ['AI', 'ML', 'DS'],
    desc: 'hello hello hello ',
    link: 'hhh.com',
    picSrc: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_582,c_limit/phonepicutres-TA.jpg'
  }]
};
let tutorData = {
  total: 100,
  data: [{
    name: '任正非',
    company: '华为',
    position: 'CEO',
    email: 'haha.com',
    eWechat: null,
    internal: false,
    tel: '123123123',
    id: '1'
  },
    {
      name: '任正非1',
      company: '华为1',
      position: 'CEO1',
      email: 'haha.com1',
      eWechat: null,
      internal: false,
      tel: '1231231213',
      id: '2'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }, {
      name: '任正非2',
      department: '华为事业部',
      position: 'CEO',
      eWechat: 'haha@xindong.com',
      email: 'null',
      internal: true,
      tel: '123123123',
      id: '1'
    }]
};

