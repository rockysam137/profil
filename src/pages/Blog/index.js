import * as React from "react"
import "../../style/Blog/index.css"
import Layout from "../../component/Layout"
import Link from "gatsby"
import Image from "../../images/neovim.jpeg"

export default function Blog() {
  return (
    <div>
      <Layout>
        <div className='I'>
          <div className='i_wrapper'>
            <img src={Image} alt="rocky"/>
            <div className='I_title'>
            Cara Install Neovim
            </div>
            <div className='I_title_sort'>
              <div className='I_title_isi'>
                <p>mungkin sebagina urakng na nuan ahe koa neovim
                </p> 
              </div>
            </div>
          {/* <Link to="instalneo">Lanjt membaca</Link> */}
          </div>
        </div>
      </Layout>
      </div>
  )
}
