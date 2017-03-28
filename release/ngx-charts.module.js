import { NgModule } from '@angular/core';
import { ChartCommonModule } from './common/chart-common.module';
import { LineChartModule } from './line-chart/line-chart.module';
import { PieChartModule } from './pie-chart/pie-chart.module';
// import { TreeMapModule } from './tree-map/tree-map.module';
// import { GaugeModule } from './gauge/gauge.module';
export var NgxChartsModule = (function () {
    function NgxChartsModule() {
    }
    NgxChartsModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        ChartCommonModule,
                        // AreaChartModule,
                        // BarChartModule,
                        // BubbleChartModule,
                        // ForceDirectedGraphModule,
                        // HeatMapModule,
                        LineChartModule,
                        // NumberCardModule,
                        PieChartModule,
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxChartsModule.ctorParameters = function () { return []; };
    return NgxChartsModule;
}());
//# sourceMappingURL=ngx-charts.module.js.map