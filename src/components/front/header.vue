<template>
  <div class="nj-header-box">
      <div class="logo-c">
          <div class="logo"></div>
          <div class="logo-right">
              <i class="r-icon r-icon-1"></i>
              <i class="r-icon r-icon-1"></i>
              <a href="" class="r-link r-link-qr">中建网站群</a>
              <a href="" class="r-link">办公信息系统</a>
              <a href="" class="r-link" @click="$router.push('/front')">返回首页</a>
          </div>
      </div>
      <div class="header-menu-box">
          <div class="menu-box" id="menuBox">
            <div class="menu-item">
                <span>关于我们</span>
             <div class="header-sub-menu-box" id="subList">
                    <div class="menu-sub-list">
                        <div class="sub-item">专题页面</div>
                        <div class="sub-item">文化活动</div>
                        <div class="sub-item">重要宣传</div>
                    </div>
                </div>    
            </div>
            <div class="menu-item"><span>新闻中心</span>
            <div class="header-sub-menu-box" id="subList">
                    <div class="menu-sub-list">
                        <div class="sub-item">专题页面</div>
                        <div class="sub-item">文化活动</div>
                        <div class="sub-item">重要宣传</div>
                    </div>
                </div></div>
            <!-- <div class="menu-item">党的建设</div>
            <div class="menu-item">业务领域</div>
            <div class="menu-item">科技创新</div>
            <div class="menu-item">文化品牌</div>
            <div class="menu-item">人力资源</div> -->
          </div>
         
      </div>
      
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  components:{},
  data(){
    return {
        subShow: false
    }
  },
  created(){
      this.init()
  },
  mounted(){},
  watch:{},
  computed:{},
  methods:{
     init() {
         $(document).on('mouseenter', '#menuBox .menu-item', (e) => {
             if(e.target.className === 'menu-item') {
                 $(e.target).addClass('menu-item-hover').siblings().removeClass('menu-item-hover')
                $(e.target).find('.header-sub-menu-box').stop(true,true).slideDown(200)
             }
             
         })
        //  $(document).on('mouseenter', '#subList', () => {
        //      $('#subList').slideDown(200)
        //  })
          $(document).on('mouseleave', '#menuBox .menu-item', (e) => {
             $('#subList').stop(true,true).slideUp(200)
             console.log(e)
            if(e.target.className === 'menu-item') {
                $(e.target).removeClass('menu-item-hover')
            }
         })
     }
  },
}
</script>
<style lang="scss" scoped>
.nj-header-box{
    background:#fff;
    .logo-c{
        display: flex;
        width:1200px;
        height:132px;
        margin:0 auto;
        justify-content: space-between;
        align-items: center;
        .logo{
            width:523px;
            height: 44px;
            background: url(../../assets/img/logo.png) no-repeat;
            background-size:100% 100%;
        }
        .logo-right{
            display: flex;
            align-items: center;
            .r-link{
                font-size: 17px;
                color:#707070;
                margin-left:16px;
                display: inline-flex;
                align-items: center;
                height:30px;
            }
            .r-link:hover{
                color:#0077cb;
            }
            .r-link-qr::before{
                display: inline-block;
                content:'';
                width:29px;
                height:29px;
                background:url(../../assets/img/earth.png) no-repeat;
                background-size: 100% 100%;
                margin-right: 10px;
            }
        }
    }
    .header-menu-box{
        position: relative;
        width:100%;
        height:51px;
        background: #3880C8;
        .menu-box{
            display: flex;
            height: 100%;
            width:1200px;
            margin:0 auto;
            justify-content: flex-start;
            align-items: center;
            .menu-item{
                font-size: 17px;
                color:#fff;
                // margin-right: 75px;
                padding:0 25px;
                margin-right:20px;
                height:100%;
                line-height:51px;
                cursor: pointer;
            }
            .menu-item-hover{
                background: #08519B;
            }
        }
    }
    .header-sub-menu-box{
        position: absolute;
        top:51px;
        left:0;
        width:100%;
        height:60px;
        display: none;
        background-color:rgba(255,255,255,.93);
        .menu-sub-list{
            display: flex;
            width:1200px;
            margin:0 auto;
            justify-content: flex-start;
            align-items: center;
            .sub-item{ 
                color: #3880C8;
                font-size: 15px;
                line-height:60px;
                margin-right:50px;
                cursor: pointer;
            }
        }
    }
}
</style>