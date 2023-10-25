"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querystring = void 0;
const typebox_1 = require("@sinclair/typebox");
const generate_optional_schema_js_1 = require("../../../helpers/typebox/generate_optional_schema.js");
exports.querystring = typebox_1.Type.Object({
    search: (0, generate_optional_schema_js_1.generateOptionalSchema)(typebox_1.Type.String()),
    cursor: (0, generate_optional_schema_js_1.generateOptionalSchema)(typebox_1.Type.String()),
    limit: (0, generate_optional_schema_js_1.generateOptionalSchema)(typebox_1.Type.Integer({
        description: "The limit has to be a number between 1 and 50.",
    })),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlzdHJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcm91dGVzL3Byb2R1Y3RzL2dldC9xdWVyeXN0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBaUQ7QUFFakQsc0dBQThGO0FBRWpGLFFBQUEsV0FBVyxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7SUFDckMsTUFBTSxFQUFFLElBQUEsb0RBQXNCLEVBQUMsY0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdDLE1BQU0sRUFBRSxJQUFBLG9EQUFzQixFQUFDLGNBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QyxLQUFLLEVBQUUsSUFBQSxvREFBc0IsRUFDM0IsY0FBSSxDQUFDLE9BQU8sQ0FBQztRQUNYLFdBQVcsRUFBRSxnREFBZ0Q7S0FDOUQsQ0FBQyxDQUNIO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljLCBUeXBlIH0gZnJvbSBcIkBzaW5jbGFpci90eXBlYm94XCI7XG5cbmltcG9ydCB7IGdlbmVyYXRlT3B0aW9uYWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy90eXBlYm94L2dlbmVyYXRlX29wdGlvbmFsX3NjaGVtYS5qc1wiO1xuXG5leHBvcnQgY29uc3QgcXVlcnlzdHJpbmcgPSBUeXBlLk9iamVjdCh7XG4gIHNlYXJjaDogZ2VuZXJhdGVPcHRpb25hbFNjaGVtYShUeXBlLlN0cmluZygpKSxcbiAgY3Vyc29yOiBnZW5lcmF0ZU9wdGlvbmFsU2NoZW1hKFR5cGUuU3RyaW5nKCkpLFxuICBsaW1pdDogZ2VuZXJhdGVPcHRpb25hbFNjaGVtYShcbiAgICBUeXBlLkludGVnZXIoe1xuICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGxpbWl0IGhhcyB0byBiZSBhIG51bWJlciBiZXR3ZWVuIDEgYW5kIDUwLlwiLFxuICAgIH0pXG4gICksXG59KTtcblxuZXhwb3J0IHR5cGUgUXVlcnlzdHJpbmcgPSBTdGF0aWM8dHlwZW9mIHF1ZXJ5c3RyaW5nPjtcbiJdfQ==