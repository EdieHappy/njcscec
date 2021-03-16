<template>
  <div class="nj-footer-box">
      <div class="footer-container">
          <div class="links">
              <div class="links-item">
                  <h2>关于我们</h2>
                  <a href="">公司简介</a>
                  <a href="">组织架构</a>
                  <a href="">发展历程</a>
                  <a href="">资质荣誉</a>
              </div>
              <div class="links-item">
                  <h2>新闻中心</h2>
                  <a href="">中建要闻</a>
                  <a href="">公司快讯</a>
                  <a href="">改革进行时</a>
                  <a href="">中标新闻</a>
                  <a href="">媒体聚焦</a>
                  <a href="">专题专栏</a>
                  <a href="">国资动态</a>
                  <a href="">安装追梦人</a>
              </div>
              <div class="links-item">
                  <h2>党的建设</h2>
                  <a href="">组织建设</a>
                  <a href="">学习践行</a>
                  <a href="">重大活动</a>
              </div>
              <div class="links-item">
                  <h2>业务领域</h2>
                  <a href="">经营布局</a>
                  <a href="">石油化工</a>
                  <a href="">机电安装</a>
                  <a href="">轨道交通电气化</a>
                  <a href="">装备制造</a>
                  <a href="">电子信息技术</a>
                  <a href="">基础设施</a>
                  <a href="">其他业务</a>
                  <a href="">重点获奖工程</a>
              </div>
              <div class="links-item">
                  <h2>科技创新</h2>
                  <a href="">科研动态</a>
                  <a href="">成果展示</a>
                  <a href="">奖项</a>
              </div>
              <div class="links-item">
                  <h2>文化品牌</h2>
                  <a href="">中建信条</a>
                  <a href="">十典九章</a>
                  <a href="">军魂匠心</a>
                  <a href="">社会责任</a>
              </div>
              <div class="links-item">
                  <h2>人力资源</h2>
                  <a href="">人才理念</a>
                  <a href="">教育培训</a>
                  <a href="">人才招聘</a>
                  <div class="contact-us">
                      <img src="../../assets/qrcode.png" alt="">
                      <span>联系我们</span>
                  </div>
              </div>
          </div>
            <div class="footer-other">
                <div class="link-other">
                    <a href="">网站地图</a><i class="split"></i>
                    <a href="">法律声明</a><i class="split"></i>
                    <a href="">友情链接</a><i class="split"></i>
                    <a href="">常见问题</a><i class="split"></i>
                    <a href="">联系我们</a>
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
    }
  },
  created(){},
  mounted(){},
  watch:{},
  computed:{},
  methods:{},
}
</script>
<style lang="scss" scoped>
.nj-footer-box{
     font-family: Microsoft YaHei;
    width:100%;
    background: #3880C8;
    .footer-container{
        width:1200px;
        margin:0 auto;
        padding-top: 60px;
        padding-bottom: 100px;
        .links{
            display: flex;
            .links-item{
                margin-right: 70px;
                h2{
                    white-space: nowrap;
                    font-size: 26px;
                    color:#fff;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                a{
                    display: inline-block;
                    width:100%;
                    text-align: center;
                    white-space: nowrap;
                    font-size: 18px;
                    color:#fff;
                    line-height: 42px;
                }
                a:hover{
                    // color:#0077cb;
                }
                .contact-us{
                    margin-top: 70px;
                    img{
                        width:105px;
                        height:105px;
                    }
                    span{
                        display: inline-block;
                        width:100%;
                        font-size: 19px;
                        color:#fff;
                        text-align: center;
                        margin-top: 10px;
                    }
                }
            }
        }
        .footer-other{
            .link-other{
                display: flex;
                align-items: center;
                margin-top: 60px;
                a{
                    font-size: 18px;
                    color:#fff;
                }
                .split{
                    display: inline-block;
                    height:17px;
                    border-right:1px solid #fff;
                    margin:0 15px;
                }
            }
        }
    }
}
</style>