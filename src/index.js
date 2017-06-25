// es6 polyfill
import 'core-js/fn/array/find-index';

import Affix from './components/display/affix';
import Alert from './components/display/alert';
import BackTop from './components/display/back-top';
import Badge from './components/display/badge';
import Breadcrumb from './components/display/breadcrumb';
import Button from './components/display/button';
import Card from './components/display/card';
import Carousel from './components/display/carousel';
import Cascader from './components/display/cascader';
import Checkbox from './components/display/checkbox';
import Circle from './components/display/circle';
import Collapse from './components/display/collapse';
import DatePicker from './components/display/date-picker';
import Dropdown from './components/display/dropdown';
import Form from './components/display/form';
import Icon from './components/display/icon';
import Input from './components/display/input';
import InputNumber from './components/display/input-number';
import LoadingBar from './components/display/loading-bar';
import Menu from './components/display/menu';
import Message from './components/display/message';
import Modal from './components/display/modal';
import Notice from './components/display/notice';
import Page from './components/display/page';
import Poptip from './components/display/poptip';
import Progress from './components/display/progress';
import Radio from './components/display/radio';
import Rate from './components/display/rate';
import Slider from './components/display/slider';
import Spin from './components/display/spin';
import Steps from './components/display/steps';
import Switch from './components/display/switch';
import Table from './components/display/table';
import Tabs from './components/display/tabs';
import Tag from './components/display/tag';
import Timeline from './components/display/timeline';
import TimePicker from './components/display/time-picker';
import Tooltip from './components/display/tooltip';
import Transfer from './components/display/transfer';
import Tree from './components/display/tree';
import { Row, Col } from './components/display/grid';
import { Select, Option, OptionGroup } from './components/display/select';
import locale from './locale';
//interaction 
import Upload from './components/interaction/upload';
import MdEditor from './components/interaction/md-editor';
const vued = {
    Affix,
    Alert,
    BackTop,
    Badge,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    iButton: Button,
    Button,
    ButtonGroup: Button.Group,
    Card,
    Carousel,
    CarouselItem: Carousel.Item,
    Cascader,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    iCircle: Circle,
    DatePicker,
    Dropdown,
    DropdownItem: Dropdown.Item,
    DropdownMenu: Dropdown.Menu,
    Form,
    iForm: Form,
    FormItem: Form.Item,
    Col,
    iCol: Col,
    Collapse,
    Icon,
    Input,
    iInput: Input,
    InputNumber,
    LoadingBar,
    Menu,
    iMenu: Menu,
    MenuGroup: Menu.Group,
    MenuItem: Menu.Item,
    Submenu: Menu.Sub,
    Message,
    Modal,
    Notice,
    Option: Option,
    iOption: Option,
    OptionGroup,
    Page,
    Panel: Collapse.Panel,
    Poptip,
    Progress,
    iProgress: Progress,
    Radio,
    RadioGroup: Radio.Group,
    Rate,
    Row,
    Select,
    iSelect: Select,
    Slider,
    Spin,
    Step: Steps.Step,
    Steps,
    // Switch,
    iSwitch: Switch,
    iTable: Table,
    Table,
    Tabs: Tabs,
    TabPane: Tabs.Pane,
    Tag,
    Timeline,
    TimelineItem: Timeline.Item,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Upload,
    MdEditor
};

const install = function(Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    Object.keys(vued).forEach((key) => {
        Vue.component(key, vued[key]);
    });

    Vue.prototype.$Loading = LoadingBar;
    Vue.prototype.$Message = Message;
    Vue.prototype.$Modal = Modal;
    Vue.prototype.$Notice = Notice;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = Object.assign(vued, { install }); // eslint-disable-line no-undef