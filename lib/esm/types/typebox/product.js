"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productType = void 0;
const typebox_1 = require("@sinclair/typebox");
const generate_optional_schema_js_1 = require("../../helpers/typebox/generate_optional_schema.js");
exports.productType = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
    description: (0, generate_optional_schema_js_1.generateOptionalSchema)(typebox_1.Type.String()),
    sku: typebox_1.Type.String(),
    regularPrice: typebox_1.Type.String(),
    salePrice: (0, generate_optional_schema_js_1.generateOptionalSchema)(typebox_1.Type.String()),
    images: typebox_1.Type.Array(typebox_1.Type.Object({
        id: typebox_1.Type.String(),
        name: (0, generate_optional_schema_js_1.generateOptionalSchema)(typebox_1.Type.String()),
        src: typebox_1.Type.String(),
    })),
    attributes: typebox_1.Type.Array(typebox_1.Type.Object({
        id: typebox_1.Type.String(),
        name: typebox_1.Type.String(),
        terms: typebox_1.Type.Array(typebox_1.Type.Object({
            id: typebox_1.Type.String(),
            name: typebox_1.Type.String(),
        })),
    })),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90eXBlcy90eXBlYm94L3Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQWlEO0FBRWpELG1HQUEyRjtBQUU5RSxRQUFBLFdBQVcsR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLEVBQUUsRUFBRSxjQUFJLENBQUMsTUFBTSxFQUFFO0lBQ2pCLElBQUksRUFBRSxjQUFJLENBQUMsTUFBTSxFQUFFO0lBQ25CLFdBQVcsRUFBRSxJQUFBLG9EQUFzQixFQUFDLGNBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsRCxHQUFHLEVBQUUsY0FBSSxDQUFDLE1BQU0sRUFBRTtJQUNsQixZQUFZLEVBQUUsY0FBSSxDQUFDLE1BQU0sRUFBRTtJQUMzQixTQUFTLEVBQUUsSUFBQSxvREFBc0IsRUFBQyxjQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEQsTUFBTSxFQUFFLGNBQUksQ0FBQyxLQUFLLENBQ2hCLGNBQUksQ0FBQyxNQUFNLENBQUM7UUFDVixFQUFFLEVBQUUsY0FBSSxDQUFDLE1BQU0sRUFBRTtRQUNqQixJQUFJLEVBQUUsSUFBQSxvREFBc0IsRUFBQyxjQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0MsR0FBRyxFQUFFLGNBQUksQ0FBQyxNQUFNLEVBQUU7S0FDbkIsQ0FBQyxDQUNIO0lBQ0QsVUFBVSxFQUFFLGNBQUksQ0FBQyxLQUFLLENBQ3BCLGNBQUksQ0FBQyxNQUFNLENBQUM7UUFDVixFQUFFLEVBQUUsY0FBSSxDQUFDLE1BQU0sRUFBRTtRQUNqQixJQUFJLEVBQUUsY0FBSSxDQUFDLE1BQU0sRUFBRTtRQUNuQixLQUFLLEVBQUUsY0FBSSxDQUFDLEtBQUssQ0FDZixjQUFJLENBQUMsTUFBTSxDQUFDO1lBQ1YsRUFBRSxFQUFFLGNBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakIsSUFBSSxFQUFFLGNBQUksQ0FBQyxNQUFNLEVBQUU7U0FDcEIsQ0FBQyxDQUNIO0tBQ0YsQ0FBQyxDQUNIO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljLCBUeXBlIH0gZnJvbSBcIkBzaW5jbGFpci90eXBlYm94XCI7XG5cbmltcG9ydCB7IGdlbmVyYXRlT3B0aW9uYWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vaGVscGVycy90eXBlYm94L2dlbmVyYXRlX29wdGlvbmFsX3NjaGVtYS5qc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdFR5cGUgPSBUeXBlLk9iamVjdCh7XG4gIGlkOiBUeXBlLlN0cmluZygpLFxuICBuYW1lOiBUeXBlLlN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogZ2VuZXJhdGVPcHRpb25hbFNjaGVtYShUeXBlLlN0cmluZygpKSxcbiAgc2t1OiBUeXBlLlN0cmluZygpLFxuICByZWd1bGFyUHJpY2U6IFR5cGUuU3RyaW5nKCksXG4gIHNhbGVQcmljZTogZ2VuZXJhdGVPcHRpb25hbFNjaGVtYShUeXBlLlN0cmluZygpKSxcbiAgaW1hZ2VzOiBUeXBlLkFycmF5KFxuICAgIFR5cGUuT2JqZWN0KHtcbiAgICAgIGlkOiBUeXBlLlN0cmluZygpLFxuICAgICAgbmFtZTogZ2VuZXJhdGVPcHRpb25hbFNjaGVtYShUeXBlLlN0cmluZygpKSxcbiAgICAgIHNyYzogVHlwZS5TdHJpbmcoKSxcbiAgICB9KVxuICApLFxuICBhdHRyaWJ1dGVzOiBUeXBlLkFycmF5KFxuICAgIFR5cGUuT2JqZWN0KHtcbiAgICAgIGlkOiBUeXBlLlN0cmluZygpLFxuICAgICAgbmFtZTogVHlwZS5TdHJpbmcoKSxcbiAgICAgIHRlcm1zOiBUeXBlLkFycmF5KFxuICAgICAgICBUeXBlLk9iamVjdCh7XG4gICAgICAgICAgaWQ6IFR5cGUuU3RyaW5nKCksXG4gICAgICAgICAgbmFtZTogVHlwZS5TdHJpbmcoKSxcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgfSlcbiAgKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBQcm9kdWN0VHlwZSA9IFN0YXRpYzx0eXBlb2YgcHJvZHVjdFR5cGU+O1xuIl19