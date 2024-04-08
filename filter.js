const DATA = [
    {
      id: 1,
      title: 'Enjoy studying English',
      tags: [
        {
          id: 'tag1',
          title: 'English',
          slug: 'english',
        },
        {
          id: 'tag2',
          title: 'For kids',
          slug: 'kids',
        },
      ],
    },
    {
      id: 2,
      title: 'Parlons français',
      tags: [
        {
          id: 'tag3',
          title: 'French',
          slug: 'french',
        },
        { id: 'tag2', title: 'Kids', slug: 'kids' },
      ],
    },
    {
      id: 3,
      title: 'Intermediate English',
      tags: [
        {
          id: 'tag1',
          title: 'English',
          slug: 'english',
        },
        {
          id: 'tag4',
          title: 'Adults',
          slug: 'adults',
        },
      ],
    },
    {
      id: 4,
      title: 'How to study French',
      tags: [
        {
          id: 'tag3',
          title: 'French',
          slug: 'french',
        },
        {
          id: 'tag4',
          title: 'Adults',
          slug: 'adults',
        },
      ],
    },
  ]



const getTagsFromNode = (tags) => tags.map(tag => tag.slug)

const getFilteredData = (DATA, filterTags) => {
    if(!DATA || filterTags.length <= 0) return DATA;

    const filteredList = DATA.filter((node) => {
        const nodeTagsSet = new Set(getTagsFromNode(node.tags))
        const  filterTagsSet = new Set(filterTags)
        return nodeTagsSet.intersection(filterTagsSet).size > 0
    })
    return filteredList
}



const getFilteredData2 = (DATA, filterTags) => {
    if(!DATA || filterTags.length <= 0) return DATA;

    const filteredList  = DATA.filter((node) => {
        const nodeTags = getTagsFromNode(node.tags)
        return  filterTags.every(filterTag => nodeTags.includes(filterTag))
    })
    return filteredList
}

const filterTags = ['adults', 'french']
const r = getFilteredData(DATA, filterTags)
console.log("result===>",r)
