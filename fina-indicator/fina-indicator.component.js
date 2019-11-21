'use strict';

angular.module('stockApp').component('finaIndicator', {
    templateUrl: 'fina-indicator/fina-indicator.template.html',
    controller: ['$scope', '$http', 'uiGridConstants',
    function StockListController($scope, $http, uiGridConstants) {

        var highlightFilteredHeader = function(row, rowRenderIndex, col, colRenderIndex) {
            if(col.filters[0].term){
                return 'header-filtered';
            } else {
                return '';
            }
        };

        var cell_class = function(cellVal){
            if(cellVal == 1){
                return 'cell-red';
            }
            if(cellVal == -1){
                return 'cell-green';
            }
            return '';
        }

        var cross_condition_fn = function(searchTerm, cellValue) {
            searchTerm = searchTerm.replace(/\\/g, '')
            return Number.parseInt(searchTerm) == cellValue;
        }

        $scope.gridOptions = {
            enableSorting: true,
            enableFiltering: true,
            paginationPageSizes: [20, 50, 100],
            paginationPageSize: 50,
            columnDefs: [
                {field: '_id', displayName: '序号', enableFiltering: false, cellTemplate: '<div class="ui-grid-cell-contents">{{grid.renderContainers.body.visibleRowCache.indexOf(row) + 1}}</div>', width: '4%'},
                {
                    field: 'end_date',
                    displayName: '日期',
                    type: 'number',
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                            placeholder: '大于等于'
                        }
                    ],
                    width: '6%',
                    headerCellClass: highlightFilteredHeader
                },
                {
                    field: 'ts_code', 
                    displayName: '代码',
                    width: '6%',
                    headerCellClass: highlightFilteredHeader
                },
                {field: 'name', displayName: '名称', headerCellClass: highlightFilteredHeader},
                {
                    field: 'eps', 
                    displayName: '每股收益', 
                    type: 'number',
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                            placeholder: '大于等于'
                        }
                    ],  
                    headerCellClass: highlightFilteredHeader
                },
                {
                    field: 'eps_2018', 
                    displayName: '2018每股收益', 
                    type: 'number',
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                            placeholder: '大于等于'
                        }
                    ],  
                    headerCellClass: highlightFilteredHeader
                },
                {
                    field: 'eps_2017', 
                    displayName: '2017每股收益', 
                    type: 'number',
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                            placeholder: '大于等于'
                        }
                    ],  
                    headerCellClass: highlightFilteredHeader
                },
                {
                    field: 'bps', 
                    displayName: '每股净资产', 
                    type: 'number',
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                            placeholder: '大于等于'
                        }
                    ],
                    headerCellClass: highlightFilteredHeader
                },
                {
                    field: 'roe', 
                    displayName: '净资产收益率', 
                    type: 'number',
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                            placeholder: '大于等于'
                        }
                    ],
                    headerCellClass: highlightFilteredHeader
                },
                {
                    field: 'roe_2018', 
                    displayName: '2018净资产收益率', 
                    type: 'number',
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                            placeholder: '大于等于'
                        }
                    ],
                    headerCellClass: highlightFilteredHeader
                },
                {
                    field: 'roe_2017', 
                    displayName: '2017净资产收益率', 
                    type: 'number',
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                            placeholder: '大于等于'
                        }
                    ],
                    headerCellClass: highlightFilteredHeader
                },
                {
                    field: 'tr_yoy', 
                    displayName: '总营业收入增长率', 
                    type: 'number',
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                            placeholder: '大于等于'
                        }
                    ],
                    headerCellClass: highlightFilteredHeader
                },
                {
                    field: 'netprofit_yoy', 
                    displayName: '净利润同比增长率', 
                    type: 'number',
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                            placeholder: '大于等于'
                        }
                    ],
                    headerCellClass: highlightFilteredHeader
                },
                {
                    field: 'pe_ttm', 
                    displayName: '浮动市盈率', 
                    type: 'number',
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                            placeholder: '大于等于'
                        }
                    ],
                    headerCellClass: highlightFilteredHeader
                }
            ]
        }

        $http({
            method: 'GET',
            url: 'data/indicator.json'
        }).then(function success(res) {
                //console.log(res);
                $.each(res.data, function(i, row){
                    
                });
                $scope.gridOptions.data = res.data;
            }, function error(res) {

            });
      }
    ]
  });
