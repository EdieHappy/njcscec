<template>
  <div class="communist-party-page">
      <div class="cp-top">
          <img src="../../assets/cp-banner.png" alt="">
      </div>
      <div class="cp-container">
          <div class="info-module">
              <div class="module-title">
                  <h2>党建要闻<i></i></h2>
                  <div class="line"></div>
                  <a href="" class="go-index" @click="$router.push('/front')">返回首页</a>
              </div>
              <div class="module-box">
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
      </div>
  </div>
</template>

<script>
export default {
  components:{},
  data(){
    return {
        activeName1: 'first1',
    }
  },
  created(){},
  mounted(){},
  watch:{},
  computed:{},
  methods:{
      handleClick1() {
          
      }
  },
}
</script>
<style lang="scss" scoped>
.communist-party-page{
    width:100%;
    background:#fff;
    font-family: Microsoft YaHei;
    .cp-top{
        img{
            width:100%;
            height:612px;
        }
    }
    .cp-container{
        width:1200px;
        margin:0 auto;
        .info-module{
            .module-title{
                position: relative;
                text-align: center;
                h2{
                    position: relative;
                    color: #C91019;   
                    font-size: 30px;
                    font-weight: bold;
                    background:#fff;
                    display: inline-block;
                    padding:0 20px;
                    height:60px;
                    line-height: 60px;
                    z-index: 10;
                    i{
                        position: absolute;
                        bottom:0;
                        left:50%;
                        margin-left:-28px;
                        width:57px;
                        border-bottom:2px solid #C91019;
                    }
                }
                .line{
                    position: absolute;
                    top:30px;
                    width:1200px;
                    border-bottom:2px solid #FF8000;
                }
            }
            .module-box{
                .news-box{
                    margin-top: 60px;
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
                                    border-left:9px solid #C91019;
                                    margin-right: 20px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>