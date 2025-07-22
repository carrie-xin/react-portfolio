import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nova 中台风控系统    2021.07 - 2025.04",
    description: "该系统是面向金融机构的一站式风险管理平台，覆盖交易全生命周期监控、市场风险计量（FRTB标准）、多资产投组分析及自动化工作流引擎。\n\n项目技术：Angular11 + Antd + Sass + Echarts + Camunda\n项目职责：\n1.主导前端架构搭建（路由设计、全局布局、样式规范），奠定系统可拓展基础。\n2.实现 POC 可视化看板，提供灵活图表定制与数据分析能力。\n3.新增Swap, CapFloor等12类衍生品交易模块，覆盖 Trade Action等9种业务操作。\n4.重构 Market Data 核心页面，优化 FX Basis Curve、CDS Curve 等数据展示逻辑。",
    image: "/projects/project1.png",
    tags: ["Angular11", "Antd", "Sass", "Echarts"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "UPI 法币交易平台   2020.11–2020.12",
    description: "支持虚拟货币与法币互兑的跨端应用，集成银联卡申请、USDT充提、交易安全验证等支付功能。\n\n项目技术：Angular10 + Ionic5 + Capacitor\n项目职责：\n1.独立完成技术选型与架构设计，采用 Ionic5 快速搭建 20 + 交易相关页面，通过 Cordova 插件实现 HTML5 页面与原生 APP 无缝衔接；\n2.调用 Capacitor 原生 SDK 实现证件拍照上传、交易文件加密下载，保障支付信息安全；\n3.接入谷歌身份验证器生成动态口令，加强平台交易操作的安全性；\n4.主导项目部署测试及 Bug 修复，推动项目一个月内完成上线；",
    image: "/projects/project2.png",
    tags: ["Angular10", "Ionic5", "Capacitor"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "帷幄车辆管理系统       2018.12–2019.04",
    description: "该系统提供给汽车租赁公司使用，包括车辆信息，司机信息，订单管理，合同签订，车辆出入库，收款结算，车辆保养，违章车辆处置等业务，有角色权限控制，可实现不同角色分管不同模块；\n\n项目技术：Vue + Nuxt + Vuex + ElementUI + Vue-chart\n项目职责：\n1.基于 vue 框架，使用 nuxt 动态生成路由，vuex 实现全局状态管理,完成资产车辆、违章查询、系统配置等模块路由设计及页面独立开发；\n2.使用 Vue-chart实现数据可视化，生成不同类型图表；\n3.封装复用组件，如车型库配置、验车等；\n4.编写全局的过滤器，如表格数据格式化、请求参数格式过滤等",
    image: "/projects/project3.png",
    tags: ["Vue", "Nuxt", "Vuex", "Vue-chart"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          精选 <span className="text-primary">项目</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          以下是我近期的一些项目，每个项目都经过精心设计，注重细节、性能和用户体验。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line">
                  {project.description.split('\n\n')[0]}
                </p>
                <div className="bg-secondary/30 rounded-md p-3 mb-2 mt-2">
                  <div className="font-semibold mb-1 text-primary">项目职责：</div>
                  <div className="text-sm text-muted-foreground whitespace-pre-line text-left">
                    {project.description.split('项目职责：')[1]
                      .replace(/(\d+\.)/g, '<strong>$1</strong>')
                      .split('\n')
                      .map((line, idx) => (
                        <div key={idx} dangerouslySetInnerHTML={{ __html: line }} />
                      ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            查看我的 Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
