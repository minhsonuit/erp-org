//JavaScript
OrgChart.templates.isla = Object.assign({}, OrgChart.templates.ana);

OrgChart.templates.isla.defs = 
    `<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="isla-shadow">
        <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" />
        <feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>`;

OrgChart.templates.isla.size = [200, 140];

OrgChart.templates.isla.node = 
    `<rect filter="url(#isla-shadow)" x="0" y="20" rx="7" ry="7" height="100" width="180" fill="#FFF" stroke-width="1" stroke="#039BE5"></rect>
    <rect x="25" y="75" rx="10" ry="10" height="20" width="130" fill="#039BE5" stroke-width="3" stroke="#039BE5"></rect>
    <rect fill="#ffffff" stroke="#039BE5" stroke-width="1" x="70" y="0" rx="13" ry="13" width="40" height="40"></rect>
    <circle stroke="#FFCA28" stroke-width="3" fill="none" cx="90" cy="12" r="8"></circle>
    <path d="M75,34 C75,17 105,17 105,34" stroke="#FFCA28" stroke-width="3" fill="none"></path>`;

OrgChart.templates.isla.ripple = {
    radius: 0,
    color: "#F57C00",
    rect: { x: 0, y: 20, width: 180, height: 100 }
};

OrgChart.templates.isla.field_0 = 
    `<text data-width="140" style="font-size: 12px;" fill="#fff" x="90" y="90" text-anchor="middle">{val}</text>`;
OrgChart.templates.isla.field_1 = 
    `<text data-width="200" style="font-size: 13px;" fill="#039BE5" x="90" y="64" text-anchor="middle">{val}</text>`;

OrgChart.templates.isla.img_0 = 
    `<clipPath id="{randId}">
        <rect filter="url(#isla-shadow)" fill="#ffffff" stroke="#039BE5" stroke-width="1" x="70" y="0" rx="13" ry="13" width="40" height="40">
        </rect>
     </clipPath>
    <image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="70" y="0" width="40" height="40"></image>`;

OrgChart.templates.isla.plus = 
    `<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#039BE5" stroke-width="1"></circle>
    <line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#039BE5"></line>
    <line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#039BE5"></line>`;
OrgChart.templates.isla.minus = 
    `<circle cx="15" cy="15" r="15" fill="#F57C00" stroke="#F57C00" stroke-width="1"></circle>
    <line x1="8" y1="15" x2="22" y2="15" stroke-width="1" stroke="#ffffff"></line>`;

OrgChart.templates.isla.nodeMenuButton = 
    `<g style="cursor:pointer;" transform="matrix(1,0,0,1,83,45)" data-ctrl-n-menu-id="{id}">
        <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
        <circle cx="0" cy="0" r="2" fill="#F57C00"></circle>
        <circle cx="7" cy="0" r="2" fill="#F57C00"></circle>
        <circle cx="14" cy="0" r="2" fill="#F57C00"></circle>
    </g>`;
let chart = new OrgChart(document.getElementById("tree"), {
    template:"isla",
    mouseScrool: OrgChart.action.scroll,
    enableSearch: false,
    enableAI: false,    
    enableDragDrop: true,
    nodeBinding: {
        field_0: "name",
        field_1:"title",
        img_0:"image"
    },
    nodes: [
        { id: 1, name: "Nguyễn Đoàn Khánh", title:"IT Director",image: "https://s120-ava-talk.zadn.vn/4/b/a/7/9/120/5af122bef12edd35e6b697dc26fe6814.jpg" },
        { id: 2, pid: 1, name: "Võ Minh Sơn", title:"ERP Engineering Manager" ,image: "https://media.licdn.com/dms/image/v2/C5603AQFkHQXFuNkDIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1620348592407?e=1747267200&v=beta&t=3dZQP-ubEq4JF4SuAnQFbMKXkbSNKvwF7WIfEU-fv3k" },
        { id: 3, pid: 1, name: "Phan Bảo Phượng",title:"ERP Manager",image:"https://media.licdn.com/dms/image/v2/C5103AQGC1ui555phvQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1539223274586?e=1747267200&v=beta&t=-wkXgYXSsxn3g-d89aYtJzusY7fI5DRPMECNYDwSUq0" },
        { id: 4, pid: 2, name: "Nguyễn Hoàng Hiệp",title:"Senior ERP Developer" ,image: "https://s120-ava-talk.zadn.vn/6/8/4/6/10/120/9e4700bd4b0f3125716c6da0af468396.jpg" },
        { id: 5, pid: 2, name: "Phan Nguyên Trung",title:"Senior ERP Developer" ,image: "https://s120-ava-talk.zadn.vn/7/e/0/3/2/120/320c495ca3ac0f09f7f1ebe3ba9d71d7.jpg" },
        { id: 6, pid: 2, name: "Trần Thị Phụng",title:"Senior ERP Developer",image:"https://media.licdn.com/dms/image/v2/C5603AQGxAKKZoX0Tbw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1645492564561?e=1747267200&v=beta&t=u8q_RDg1PJdWowYnUW46cvk8WyTvNIH8sLUXIoCwPjU" },
        { id: 7, pid: 3, name: "Võ Minh Thái",title:"Associate ERP Manager",image:"https://media.licdn.com/dms/image/v2/D5603AQH-wfbc2C1Wow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706846170399?e=1747267200&v=beta&t=WZKg7iFSPg5YfJ8tQFvqtnN1TFyQqi9apCvEcEihdG4" },
        { id: 8, pid: 3, name: "Lương Đỗ Cẩm Phụng",title:"Senior ERP Analyst",image:"https://s120-ava-talk.zadn.vn/d/5/5/7/15/120/07d3bc132e377832ecf0ae360c014bae.jpg" },
        { id: 9, pid: 3, name: "Mai Quang Khôi",title:"Senior ERP Analyst" ,image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png" },
        { id: 10, pid: 3, name: "Nguyễn Thị Quỳnh Như",title:"Senior ERP Analyst",image:"https://s120-ava-talk.zadn.vn/9/8/0/8/5/120/38600228a177c18e916dadc0aae03807.jpg" },
        { id: 11, pid: 3, name: "Võ Hoàng Phương Anh",title:"Senior ERP Analyst",image:"https://cdn-icons-png.flaticon.com/512/2922/2922561.png" }
    ]
});

