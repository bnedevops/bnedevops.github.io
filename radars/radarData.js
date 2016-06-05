//This is the title for your window tab, and your Radar
document.title = 'Brisbane DevOps Meetup Tech Radar';


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ('radial coordinate')
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ('angular coordinate')
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no 'avoid' ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { 'quadrant': 'Techniques',
        'left': 45,
        'top': 18,
        'color': '#8FA227',
        'items': [
            { 'name': 'AMI Baking', 'pc': { 'r': 50, 't': 150 }, 'movement': 'c' },
            {'name': 'Full Value Stream as a Pipeline', 'pc': {'r': 150, 't': 165}, 'movement': 'c'},
            {'name': 'EBS Snapshot as deployment Unit', 'pc': {'r': 250, 't': 120}, 'movement': 'c'},
            {'name': 'Test Driven Infrastructure', 'pc': {'r': 250, 't': 100}, 'movement': 'c'}
        ]
    },
    { 'quadrant': 'Tools',
        'left': w-200+30,
        'top' : 18,
        'color' : '#587486',
        'items': [
            { 'name': 'PM2', 'pc': { 'r': 80, 't': 80 }, 'movement': 'c' },
            {'name': 'ELK', 'pc': {'r': 50, 't': 70}, 'movement': 'c'},
            {'name': 'Ansible', 'pc': {'r': 60, 't': 60}, 'movement': 'c'},
            {'name': 'CHEF', 'pc': {'r': 70, 't': 45}, 'movement': 'c'},
            {'name': 'Snap CI', 'pc': {'r': 40, 't': 30}, 'movement': 'c'},
            {'name': 'Myst', 'pc': {'r': 50, 't': 10}, 'movement': 'c'},
            {'name': 'Jenkins Pipelines', 'pc': {'r': 120, 't': 10}, 'movement': 'c'},
            {'name': 'Chef Delivery', 'pc': {'r': 120, 't': 70}, 'movement': 'c'},
            {'name': 'HC Nomad', 'pc': {'r': 170, 't': 60}, 'movement': 'c'},
            {'name': 'Beyonda DB??', 'pc': {'r': 170, 't': 45}, 'movement': 'c'},
            {'name': 'Snap CI', 'pc': {'r': 220, 't': 60}, 'movement': 'c'},
            {'name': 'Concourse CI', 'pc': {'r': 230, 't': 80}, 'movement': 'c'},
            {'name': 'Spinnaker', 'pc': {'r': 240, 't': 50}, 'movement': 'c'},
            {'name': 'Test Kitchen', 'pc': {'r': 260, 't': 20}, 'movement': 'c'},
            {'name': 'pyinfra', 'pc': {'r': 280, 't': 70}, 'movement': 'c'},
            {'name': 'Octupus Deploy', 'pc': {'r': 260, 't': 10}, 'movement': 'c'},
            {'name': 'Capistrano', 'pc': {'r': 320, 't': 30}, 'movement': 'c'},
            {'name': 'Fabric', 'pc': {'r': 330, 't': 40}, 'movement': 'c'},
            {'name': 'App Dynamics', 'pc': {'r': 320, 't': 50}, 'movement': 'c'},
        ]
    },
    { 'quadrant': 'Platforms',
        'left' :45,
         'top' : (h/2 + 18),
        'color' : '#DC6F1D',
        'items': [
            { 'name': 'Cloud Formation', 'pc': { 'r': 50, 't': 200 }, 'movement': 'c' },
            {'name': 'Docker', 'pc': {'r': 70, 't': 210}, 'movement': 'c'},
            {'name': 'Kubernetes', 'pc': {'r': 110, 't': 240}, 'movement': 'c'},
            {'name': 'Mesosphere', 'pc': {'r': 110, 't': 250}, 'movement': 'c'},
            {'name': 'ECS', 'pc': {'r': 110, 't': 260}, 'movement': 'c'},
            {'name': 'Openstack', 'pc': {'r': 60, 't': 260}, 'movement': 'c'},
            {'name': 'Openshift', 'pc': {'r': 230, 't': 240}, 'movement': 'c'},
        ]
    },
    { 'quadrant': 'Languages & Frameworks',
        'color' : '#B70062',
        'left'  : (w-200+30),
        'top' :   (h/2 + 18),
        'items' : [
            {'name': 'GO', 'pc': {'r': 130, 't': 320}, 'movement': 'c'},
            { 'name': 'ELK', 'pc': { 'r': 50, 't': 298 }, 'movement': 'c'},
        ]
    }
];
