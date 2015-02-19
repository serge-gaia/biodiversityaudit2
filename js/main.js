require.config({
    // Define shortcut alias
    paths: {
        jquery: 'lib/jquery.min',
        underscore: 'lib/lodash.min',
        backbone: 'lib/backbone-min',
        leaflet: 'lib/leaflet',
        leaflet_ajax: 'lib/leaflet.ajax.min',
        datatables: 'lib/jquery.dataTables',
        recline: 'lib/recline.dataset',
        bootstrap: 'lib/bootstrap.min',
        templates: '../templates',
        config: 'config',
        fauna: 'models/fauna',
        flora: 'models/flora',
        communities: 'models/communities',
        wetlands: 'models/wetlands'
    },

    // Dependencies and return values for scripts that are not AMD friendly
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        recline: {
            deps: ['jquery', 'underscore', 'backbone', 'lib/csv', 'lib/ckan'],
            init: function () {
                return this.recline;
            }
        },
        leaflet_ajax: {
            deps: ['leaflet']
        }
    }
});

require(['router', 'config',
        'fauna', 'flora', 'communities', 'wetlands'

    ],
    function (Router, config, fauna, flora, communities, wetlands) {
        var dataSource = config.datasource || 'test'; // 'csv', 'datastore', 'test'

        Router.initialize();

        // start the data fetching
        fauna.init(fauna.dataSets[dataSource]);
//        flora.init(flora.dataSets[dataSource]);
//        communities.init(communities.dataSets[dataSource]);
//        wetlands.init(wetlands.dataSets[dataSource]);


        // @todo: remove
        window.fauna = fauna
    });