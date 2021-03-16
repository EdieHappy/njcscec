<template>
  <div class="front-page">
      <v-header></v-header>
      <div class="page-container">
          <div class="banner">
              <img src="../../assets/banner.png" alt="">
          </div>
          <div class="info-container">
              <div class="info-module">
                  <h2><span>项目展示</span><i></i></h2>
                  <div class="m-cnt">
                      <div class="project-box">
                          <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="高端机电" name="first">
                                <div class="tabs-cnt">
                                    <div class="c-item">
                                        <img src="../../assets/gdjd.png" alt="">
                                        <div class="item-t">高端机电</div>
                                    </div>
                                    <div class="c-item">
                                        <img src="../../assets/gd.png" alt="">
                                        <div class="item-t">312国道</div>
                                    </div>
                                    <div class="c-item">
                                        <img src="../../assets/yd.png" alt="">
                                        <div class="item-t">溧水极限运动馆</div>
                                    </div>
                                    <div class="c-item">
                                        <img src="../../assets/jc.png" alt="">
                                        <div class="item-t">禄口国际机场</div>
                                    </div>
                                    <div class="c-item">
                                        <img src="../../assets/sc.png" alt="">
                                        <div class="item-t">水厂</div>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="路桥建设" name="second">路桥建设</el-tab-pane>
                            <el-tab-pane label="EPC总承包" name="third">EPC总承包</el-tab-pane>
                            <el-tab-pane label="城市更新" name="fourth">城市更新</el-tab-pane>
                        </el-tabs>
                      </div>
                  </div>
              </div>
              <!-- 企业新闻 -->
              <div class="info-module">
                  <h2><span>企业新闻</span><i></i></h2>
                  <div class="m-cnt">
                      <div class="news-box">
                          <div class="news-banner">
                            <el-carousel :interval="5000" arrow="always">
                                <el-carousel-item>
                                    <img src="../../assets/news-1.png" alt="">
                                    <div class="news-t"><p>中建集团召开2021年党风廉政建设和反腐中建集团召开2021年党风廉政建设和反腐</p></div>
                                </el-carousel-item>
                                 <el-carousel-item>
                                    <img src="../../assets/gdjd.png" alt="">
                                     <div class="news-t"><p>中建集团召开2021年党风廉政建设和反腐中建集团召开2021年党风廉政建设和反腐</p></div>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <img src="../../assets/gdjd.png" alt="">
                                     <div class="news-t"><p>中建集团召开2021年党风廉政建设和反腐中建集团召开2021年党风廉政建设和反腐</p></div>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <img src="../../assets/gdjd.png" alt="">
                                     <div class="news-t"><p>中建集团召开2021年党风廉政建设和反腐中建集团召开2021年党风廉政建设和反腐</p></div>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <img src="../../assets/gdjd.png" alt="">
                                     <div class="news-t"><p>中建集团召开2021年党风廉政建设和反腐中建集团召开2021年党风廉政建设和反腐</p></div>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                        <div class="news-list">
                            <el-tabs v-model="activeName1" @tab-click="handleClick1">
                                <el-tab-pane label="高端机电" name="first1">
                                    <div class="tabs-cnt">
                                       <div class="news-intro" @click="newsDetail()">
                                           <p>见证先锋,追寻红色足迹,探访中国建筑承建的中共会议的先进精,追寻红色足迹,追寻红色足迹</p>
                                           <div class="date">03-05</div>
                                        </div>
                                        <div class="news-intro" @click="cpartyDetail()">
                                           <p>见证先锋,追寻红色足迹,探访中国建筑承建的中共会议的先进精,追寻红色足迹,追寻红色足迹</p>
                                           <div class="date">03-05</div>
                                        </div>
                                        <div class="news-intro">
                                           <p>见证先锋,追寻红色足迹,探访中国建筑承建的中共会议的先进精,追寻红色足迹,追寻红色足迹</p>
                                           <div class="date">03-05</div>
                                        </div>
                                        <div class="news-intro">
                                           <p>见证先锋,追寻红色足迹,探访中国建筑承建的中共会议的先进精,追寻红色足迹,追寻红色足迹</p>
                                           <div class="date">03-05</div>
                                        </div>
                                        <div class="news-intro">
                                           <p>见证先锋,追寻红色足迹,探访中国建筑承建的中共会议的先进精,追寻红色足迹,追寻红色足迹</p>
                                           <div class="date">03-05</div>
                                        </div>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="路桥建设" name="second1">路桥建设</el-tab-pane>
                                <el-tab-pane label="EPC总承包" name="third1">EPC总承包</el-tab-pane>
                                <el-tab-pane label="城市更新" name="fourth1">城市更新</el-tab-pane>
                            </el-tabs>
                        </div>
                      </div>
                  </div>
              </div>
                 <div class="info-module">
                  <h2><span>公司简介</span><i></i></h2>
                  <div class="m-cnt">
                      <div class="intro-box">
                          <div class="img-left">
                              <img src="../../assets/gdjd.png" alt="">
                          </div>
                          <div class="intro-right">
                              <div class="intro-p"><p>中国建筑三级单位，中建安装A类分公司，五大事业部，四个营销中心，35个在建项目，立足苏皖俩大省域市场，总部南京，员工900余人，持有注册一级建造师，注册结构工程师注册建筑师各类注册证书134人。</p></div>
                              <div class="icons-list">
                                  <div class="icon-item">
                                      <i class="icon-i icon-dj"></i>
                                      <span>党的建设</span>
                                  </div>
                                  <div class="icon-item">
                                      <i class="icon-i icon-pp"></i>
                                      <span>品牌文化</span>
                                  </div>
                                  <div class="icon-item">
                                      <i class="icon-i icon-rlzy"></i>
                                      <span>人力资源</span>
                                  </div>
                                  <div class="icon-item">
                                      <i class="icon-i icon-kj"></i>
                                      <span>科技创新</span>
                                  </div>
                                  <div class="icon-item">
                                      <i class="icon-i icon-ry"></i>
                                      <span>荣誉证书</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                 </div>

          </div>
      </div>
       <v-footer></v-footer>
  </div>
</template>

<script>
import footer from '../../components/front/footer'
import header from '../../components/front/header'
export default {
  components:{
      'v-footer': footer,
      'v-header': header
  },
  data(){
    return {
        activeName: 'first',
        activeName1: 'first1',
    }
  },
  created(){},
  mounted(){},
  watch:{},
  computed:{},
  methods:{
      handleClick() {

      },
      handleClick1() {

      },
      newsDetail() {
          this.$router.push('/front/news')
      },
      cpartyDetail() {
          this.$router.push('/front/cparty')
      },
  },
}
</script>
<style lang="scss" scoped>
.page-container{
    padding-bottom:100px;
    .banner{
        width:100%;
        img{
            width:100%;
            height: 429px;
        }
    }
    .info-container{
        width:1200px;
        margin:0 auto;
        .info-module{
            margin-top: 40px;
            h2{
                display: inline-block;
                position: relative;
                font-size: 24px;  
                color:#333;
                height:50px;
                flex-direction: column;
                line-height: 50px;
                display: inline-flex;
                align-items: center;
                margin-bottom: 10px;
              i{
                //   position: absolute;
                //   bottom:0;
                display: inline-block;
                  width: 57px;
                // height: 2px;
                border-bottom:2px solid #0182CD;
                // background: #0182CD;
                // left:0;
                // margin-left:28px;
              }
            }
            .project-box{
                /deep/ .el-tabs{
                    .el-tabs__header{
                        margin:0 0 30px;
                    }
                    .el-tabs__item{
                        font-size: 15px;
                        color:#686060;
                        font-weight: bold;
                    }
                    .el-tabs__item:hover{
                        color:#0182CD;
                    }
                }
                /deep/ .el-tabs__nav-wrap::after{
                    display: none;
                }
                /deep/ .el-tab-pane{
                    .tabs-cnt{
                        display: flex;
                        .c-item{
                            width:20%;
                            height:350px;
                            overflow: hidden;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            position: relative;
                            img{
                                // width:100%;
                                height:100%;
                            }
                            .item-t{
                                position: absolute;
                                height:39px;
                                line-height: 39px;
                                width:100%;
                                left:0;
                                bottom:0;
                                color:#fff;
                                text-align: center;
                                font-size: 15px;
                                background-color: rgba(0, 0, 0, .55);
                            }
                        }
                    }
                }
            }
            .news-box{
                display: flex;
                height:396px;
                margin-top: 20px;
                /deep/ .el-tabs{
                    .el-tabs__header{
                        margin:20px 0 auto;
                    }
                    .el-tabs__active-bar{
                        display: none;
                    }
                    .el-tabs__item{
                        font-size: 20px;
                        color:#686060;
                        font-weight: bold;
                    }
                     .el-tabs__item.is-active{
                         color:#409eff;
                     }
                    .el-tabs__item:hover{
                        color:#0182CD;
                    }
                }
                /deep/ .el-tabs__nav-wrap::after{
                    display: none;
                }
                .news-banner{
                    width:541px;
                    height:100%;
                    /deep/ .el-carousel{
                        height:100%;
                        .el-carousel__arrow{
                            width:33px;
                            height:33px;
                            border-radius: 0;
                            background:none;
                            opacity: .7;
                            i{
                                display: none;
                            }
                        }
                        .el-carousel__arrow:hover{
                            opacity: 1;
                        }
                        .el-carousel__arrow--right{
                            background:url(../../assets/img/arr-right.png) no-repeat;
                            background-size: 100% 100%;
                        }
                        .el-carousel__arrow--left{
                             background:url(../../assets/img/arr-left.png) no-repeat;
                            background-size: 100% 100%;
                        }
                        .el-carousel__indicators{
                            left:auto;
                            right:20px;
                            transform: none;
                            .el-carousel__button{
                                width:8px;
                                height:8px;
                                border-radius: 50%;
                                background:#fff;
                                opacity: 1;
                            }
                            .el-carousel__indicator.is-active button{
                                opacity: 1;
                                background:#3880C8;
                            }
                        }
                        .el-carousel__container{
                            height:100%;
                        }
                        .el-carousel__item{
                            height:100%;
                            img{
                                width:100%;
                                height:100%;
                            }
                            .news-t{
                                position: absolute;
                                bottom:0;
                                width:100%;
                                height:40px;
                                background-color:rgba(0,0,0, .55);
                                p{
                                   width:370px;
                                   height:100%;
                                   overflow: hidden;
                                   text-overflow: ellipsis;
                                   white-space: nowrap;
                                   font-size: 19px;
                                   color:#fff;
                                   font-weight: bold;
                                   line-height: 40px;
                                   padding-left:15px;
                                }

                            }
                        }
                    }
                }
                .news-list{
                    overflow: hidden;
                    padding-right:45px;
                    box-sizing: border-box;
                    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
                    // flex-grow: 1;
                    width:729px;
                    padding-left:41px;
                    // box-shadow: ;
                     /deep/ .el-tab-pane{
                        .tabs-cnt{
                            width:100%;
                            .news-intro{
                                height:60px;
                                width:100%;
                                display: flex;
                                align-items: center;
                                border-bottom:1px dashed #BCBCBC;
                                cursor: pointer;
                                justify-content: space-between;
                                p{
                                    height:60px;
                                    line-height: 60px;
                                    width:450px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    font-size: 16px;
                                    color:#686060;
                                    white-space: nowrap;
                                }
                                p:hover{
                                    color:#0077cb;
                                }
                                .date{
                                    flex-grow: 1;
                                    text-align: right;
                                    color:#9a9a9a;
                                }
                            }      
                            .news-intro::before{
                                display: inline-block;
                                content:'';
                                width:0;
                                height:0;
                                border-top:6px solid transparent;
                                border-bottom:6px solid transparent;
                                border-left:9px solid #686060;
                                margin-right: 20px;
                            }
                        }
                     }
                }
            }
            .intro-box{
                display: flex;
                height:301px;
                overflow: hidden;
                margin-top: 20px;
                .img-left{
                    height:100%;
                    width:543px;
                    img{
                        display: block;
                        width:543px;
                        height:100%;
                    }
                }
                .intro-right{
                    padding-left:40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .intro-p{
                        p{
                            font-size: 15px;
                            font-weight: 400;
                            line-height: 30px;
                            color: #686060;
                        }
                    }
                    .icons-list{
                        display: flex;
                        .icon-item{
                            width:68px;
                            height:110px;
                            margin-right: 40px;
                            .icon-i{
                                display: inline-block;
                                width:59px;
                                height:58px;
                            }
                            span{
                                display: inline-block;
                                margin-top: 25px;
                                font-size: 15px;
                                color: #686060;
                                font-weight: 400;
                            }
                            .icon-dj{   
                                background: url(../../assets/img/icon-dj.png) no-repeat;
                                background-size: 100% 100%;
                            }
                            .icon-pp{   
                                background: url(../../assets/img/icon-pp.png) no-repeat;
                                background-size: 100% 100%;
                            }
                            .icon-kj{   
                                background: url(../../assets/img/icon-kj.png) no-repeat;
                                background-size: 100% 100%;
                            }
                            .icon-rlzy{   
                                background: url(../../assets/img/icon-rlzy.png) no-repeat;
                                background-size: 100% 100%;
                            }
                            .icon-ry{   
                                background: url(../../assets/img/icon-ry.png) no-repeat;
                                background-size: 100% 100%;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>