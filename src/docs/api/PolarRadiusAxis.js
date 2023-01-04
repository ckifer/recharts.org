export default {
  name: 'PolarRadiusAxis',
  props: [
    {
      name: 'angle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The angle of radial direction line to display axis text.',
        'zh-CN': '径向轴的角度。',
      },
    },
    {
      name: 'type',
      type: "'number' | 'category'",
      defaultVal: "'category'",
      isOptional: false,
      desc: {
        'en-US': 'The type of axis.',
        'zh-CN': '半径轴的类型：数值轴、类目轴。',
      },
    },
    {
      name: 'allowDuplicatedCategory',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'Allow the axis has duplicated categorys or not when the type of axis is "category".',
        'zh-CN': '是否允许类目轴有重复的类目。',
      },
    },
    {
      name: 'cx',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinate of center.',
        'zh-CN': '圆心的 x 坐标。',
      },
    },
    {
      name: 'cy',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of center.',
        'zh-CN': '圆心的 y 坐标。',
      },
    },
    {
      name: 'domain',
      type: 'Array | Function',
      defaultVal: "[0, 'auto']",
      isOptional: false,
      desc: {
        'en-US':
          "Specify the domain of radius in a polar chart. And the length should be 2. And each element in the array can be a number, 'auto', 'dataMin' or 'dataMax'. If any element of domain is set to be 'auto', comprehensible scale ticks will be calculated, and the final domain of axis is generated by the ticks. If a function, receives '[dataMin, dataMax]', and must return a computed domain as '[min, max]'.",
        'zh-CN':
          '通过这个配置可以指定 径向轴 刻度函数的定义域。这个配置是一个二元数组，数组中的元素可以是一个数值，"auto", "dataMin", "dataMax" 或者类似于"dataMin - 100", "dataMax + 200"这样的字符串。如果任意元素的取值为"auto"，我们会生成可读性高的刻度，并且保证设置的刻度数。如果是函数，则接收“[dataMin, dataMax]”，并且必须将计算域返回为“[min, max]”。',
      },
      format: [
        "<PolarRadiusAxis domain={['dataMin', 'dataMax']} />",
        "<PolarRadiusAxis domain={[0, 'dataMax']} />",
        "<PolarRadiusAxis domain={['auto', 'auto']} />",
        '<PolarRadiusAxis domain={([dataMin, dataMax]) => { const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax)); return [-absMax, absMax]; }} />',
      ],
    },
    {
      name: 'reversed',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: true,
      desc: {
        'en-US': 'If set to true, the ticks of this axis are reversed.',
        'zh-CN': '是否反转刻度的顺序',
      },
    },
    {
      name: 'label',
      type: 'String | Number | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'If set a string or a number, default label will be drawn, and the option is content. If set a React element, the option is the custom react element of drawing label. If set a function, the function will be called to render customized label.',
        'zh-CN':
          '当值为简单类型的数值或者字符串时，这个值会被渲染成文字标签。当值为 React element，会克隆这个元素来渲染文字标签。',
      },
    },
    {
      name: 'orientation',
      type: '"left" | "right" | "middle"',
      defaultVal: 'right',
      isOptional: false,
      desc: {
        'en-US': 'The orientation of axis text.',
        'zh-CN': '径向轴的位置：左侧、右侧、中间。',
      },
    },
    {
      name: 'axisLine',
      type: 'Bool | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, axis line will not be drawn. If true set, axis line will be drawn which have the props calculated internally. If object set, axis line will be drawn which have the props mergered by the internal calculated props and the option.',
        'zh-CN': '刻度线配置。当值为 false 时，不绘制刻度线。当值为对象类型时，会把这个对象解析成刻度线的属性配置。',
      },
    },
    {
      name: 'tick',
      type: 'Bool | Object | Element | Function',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, ticks will not be drawn. If true set, ticks will be drawn which have the props calculated internally. If object set, ticks will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom tick element. If set a function, the function will be called to render customized ticks.',
        'zh-CN':
          '刻度配置。当值为 false 时，不绘制刻度。当值为对象类型时，会把这个对象解析成刻度的属性配置。当值为 React element，会克隆这个元素来渲染刻度。',
      },
    },
    {
      name: 'tickFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The function to formatting tick.',
        'zh-CN': '刻度的格式化函数。',
      },
    },
    {
      name: 'tickCount',
      type: 'Number',
      defaultVal: 5,
      isOptional: false,
      desc: {
        'en-US': "The count of axis ticks. Not used if 'type' is 'category'.",
        'zh-CN': "刻度数。如果'type'是'category'，则不使用。",
      },
    },
    {
      name: 'scale',
      type: `'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' |
        'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utc' | 'sequential' |
        'threshold' | Function`,
      defaultVal: 'auto',
      isOptional: false,
      desc: {
        'en-US': "If 'auto' set, the scale funtion is linear scale.",
        'zh-CN': '当值为 "auto" 时，会根据图表类型来生成 scale 函数，也可以传入自定义的函数作为 scale 函数。',
      },
      format: [
        '<PolarRadiusAxis scale="log" />',
        `
import { scaleLog } from 'd3-scale';
const scale = scaleLog().base(Math.E);

...
<PolarRadiusAxis scale={scale} />
...
`,
      ],
    },
    {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the ticks of this axis',
        'zh-CN': '刻度 click 事件的回调函数。',
      },
    },
    {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the the ticks of this axis',
        'zh-CN': '刻度 mousedown 事件的回调函数。',
      },
    },
    {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the ticks of this axis',
        'zh-CN': '刻度 mouseup 事件的回调函数。',
      },
    },
    {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the ticks of this axis',
        'zh-CN': '刻度 mousemove 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the ticks of this axis',
        'zh-CN': '刻度 mouseover 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the ticks of this axis',
        'zh-CN': '刻度 mouseout 事件的回调函数。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of moustenter on the ticks of this axis',
        'zh-CN': '刻度 moustenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the ticks of this axis',
        'zh-CN': '刻度 mouseleave 事件的回调函数。',
      },
    },
  ],
  parentComponents: ['RadarChart', 'RadialBarChart'],
  childrenComponents: ['Label'],
};
