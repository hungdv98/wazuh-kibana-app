require('ui/modules').get('app/wazuh', [])
    .service('appState', function ($cookies) {
        return {
            getDashboardsState: function () {
                return { name: $cookies.getObject('_dashboardsState_name'), filter: $cookies.getObject('_dashboardsState_filter') };
            },
            setDashboardsState: function (name, filter) {
                if (name) {
                    $cookies.putObject('_dashboardsState_name', name);
                }
                if (filter) {
                    $cookies.putObject('_dashboardsState_filter', filter);
                }
            },
      			getExtensions: function () {
                      return { extensions: $cookies.getObject('extensions') };
                  },
                  setExtensions: function (extensions) {
                      if (extensions) {
                          $cookies.putObject('extensions', extensions);
                      }
                  },
      			unsetDashboardsState: function () {
                          $cookies.putObject('_dashboardsState_name', "");
                          $cookies.putObject('_dashboardsState_filter', "");
                  },
      			getDiscoverState: function () {
                      return { name: $cookies.getObject('_discoverState_name'), filter: $cookies.getObject('_discoverState_filter') };
                  },
            setDiscoverState: function (name, filter) {
                if (name) {
                    $cookies.putObject('_discoverState_name', name);
                }
                if (filter) {
                    $cookies.putObject('_discoverState_filter', filter);
                }
            },
			      unsetDiscoverState: function () {
                    $cookies.putObject('_discoverState_name', "");
                    $cookies.putObject('_discoverState_filter', "");
            },
            getManagerState: function () {
                return $cookies.getObject('_managerState');
            },
            setManagerState: function (subtab) {
                if (subtab) {
                    $cookies.putObject('_managerState', subtab);
                }
            },
            getRulesetState: function () {
                return $cookies.getObject('_rulesetState');
            },
            setRulesetState: function (subtab) {
                if (subtab) {
                    $cookies.putObject('_rulesetState', subtab);
                }
            },
            getOverviewState: function () {
                return $cookies.getObject('_overviewState');
            },
            setOverviewState: function (subtab) {
                if (subtab) {
                    $cookies.putObject('_overviewState', subtab);
                }
            },
      			getClusterInfo: function () {
      				if($cookies.getObject('_clusterInfo'))
<<<<<<< HEAD
      					return $cookies.getObject('_clusterInfo');
=======
      					return { name: $cookies.getObject('_clusterInfo')};
>>>>>>> 991c3c0... Getting Cluster info from /cluster/node
      				else
      					return {"node": "*","manager": "*","cluster": "*"};

                  },
            setClusterInfo: function (cluster_info) {
<<<<<<< HEAD
              if (cluster_info) {
=======
              if (name) {
>>>>>>> 991c3c0... Getting Cluster info from /cluster/node
                      $cookies.putObject('_clusterInfo', cluster_info);
                  }
              },
      			getDisState: function (tab) {
      				if($cookies.getObject(tab))
      					return { value: $cookies.getObject(tab)};
      				else
      					return { value: "*"};

                  },
                  setDisState: function (tab,value) {
                      if (tab && value) {
                          $cookies.putObject(tab, value);
                      }
                  }
          };
    });
