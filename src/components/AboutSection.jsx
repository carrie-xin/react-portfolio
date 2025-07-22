import { Settings, Layers, Hammer, Shield } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          关于 <span className="text-primary"> 我</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {/* <h3 className="text-2xl font-semibold">
              充满热情的 Web 前端开发
            </h3> */}

            <div>
              <img src="/src/assets/me.jpg" alt="我的照片" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                联系我
              </a>

              <a
                href="/src/assets/辛集芳简历-Web前端.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
              >
                下载简历
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">核心技术</h4>
                  <p className="text-muted-foreground">
                    掌握HTML5/CSS3/Sass/ES6+/TypeScript，深入理解W3C标准，擅长Ajax性能优化；
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">框架工具</h4>
                  <p className="text-muted-foreground">
                    掌握Angular生态（RxJS/Ionic/CLI），熟练使用 Vue(Vuex + Nuxt)；
                    掌握ECharts(动态风险热力图、K线图）各类复杂图表，主导Flexmonster Pivot落地百万级数据下钻；
                    熟悉BPMN流程引擎与Hybrid App开发，能独立完成跨端功能实现；
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Hammer className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">工程能力</h4>
                  <p className="text-muted-foreground">
                    熟悉Webpack/Gulp构建优化，Git协作规范，推动组件化开发与持续集成；
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">金融领域</h4>
                  <p className="text-muted-foreground">
                    参与FRTB风控、VaR计算模块开发，对接IRS/CDS等衍生品交易系统，熟悉银行级接口规范；
                    掌握国密SM4算法，在虚拟货币交易、客户敏感信息传输等场景中实现数据加密处理，保证用户数据及交易安全。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
