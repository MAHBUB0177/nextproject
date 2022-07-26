import Head from "next/head"

const Meta = ({title,keyword,description}) => {
  return (
       <Head>
        <title>Nextproject|{title}</title>
        <meta charSet="utf-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="='IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content={description} />
        <meta name='keyword' content={keyword}/>
        {/* keyword:ki ki keyword die amra page take ranking korte chassi. ai meta deta gulo SEO ke guide kore je amder page ta ki korbe kondik jabe 
               ai meta deta ta help kore search engine (seo)ke amder page ta somporke a overall dharona dite*/}
            

       </Head>

  )
}

Meta.defaultProps ={
  title:'next.js project',
  keyword:'react , next,project',
  description:'update all page dynamically'
}


export default Meta