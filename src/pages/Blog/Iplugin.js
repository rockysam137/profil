import React from 'react'

const Plugin = () =>{
  return(
    <div>
     <div className='Plugin'>
       <div className='P_wraap'>
         <p>Carai install Plugins Neovim</p>
         <p>
           melanjutkan cara install neovim tumare, ari niant diri install plugina
           agi, biar tampilan Neovim diri makin mantap
           utamam nya harus install plugins manager nya doho, biar diri makin di permudah
           manyak plugin manager nang tersebar ka internet contoh nya 
           <li>Plug</li>
           <li>Dein</li>
           <li>Packer</li>
           <p>tapi diri milih antara sete yakoa diri pilih Packer
             baik pertam diri install plugin management nya doho
             buka doho terminal linux nya abiskoa diri klon repository nya dari github
             dengan cara copy jak script nya ka bawah nia ka terminal ayung-ayung 
             <b>git clone --depth 1 https://github.com/wbthomason/packer.nvim\
              ~/.local.share/nvim/site/pack/packer/start/packer.nvim</b>
             tinggal tunggu istalasi nya selesai  
            </p>
          </p>
        </div>
      </div> 
    </div>
  )
}

export default Plugin
