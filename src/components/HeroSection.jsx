import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> 嗨，我是</span>
            {/* <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              辛
            </span> */}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              辛集芳
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            深耕前端九年，技术栈覆盖HTML/TS/Angular/Vue全链路，玩转ECharts多种图表，
            Ant/Element组件库二次封装小能手，Hybrid App跨端实战派。
            熟悉金融风控系统、虚拟货币交易平台等开发。
            代码洁癖+团队粘合剂，能扛需求能修Bug，希望在相关前端岗位发挥价值！
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              查看我的作品
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
