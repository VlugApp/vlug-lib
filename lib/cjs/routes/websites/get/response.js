"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.response = {
    200: typebox_1.Type.Object({
        websites: typebox_1.Type.Array(typebox_1.Type.Object({
            id: typebox_1.Type.String(),
            name: typebox_1.Type.String(),
        })),
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcm91dGVzL3dlYnNpdGVzL2dldC9yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBaUQ7QUFFcEMsUUFBQSxRQUFRLEdBQUc7SUFDdEIsR0FBRyxFQUFFLGNBQUksQ0FBQyxNQUFNLENBQUM7UUFDZixRQUFRLEVBQUUsY0FBSSxDQUFDLEtBQUssQ0FDbEIsY0FBSSxDQUFDLE1BQU0sQ0FBQztZQUNWLEVBQUUsRUFBRSxjQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLElBQUksRUFBRSxjQUFJLENBQUMsTUFBTSxFQUFFO1NBQ3BCLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljLCBUeXBlIH0gZnJvbSBcIkBzaW5jbGFpci90eXBlYm94XCI7XG5cbmV4cG9ydCBjb25zdCByZXNwb25zZSA9IHtcbiAgMjAwOiBUeXBlLk9iamVjdCh7XG4gICAgd2Vic2l0ZXM6IFR5cGUuQXJyYXkoXG4gICAgICBUeXBlLk9iamVjdCh7XG4gICAgICAgIGlkOiBUeXBlLlN0cmluZygpLFxuICAgICAgICBuYW1lOiBUeXBlLlN0cmluZygpLFxuICAgICAgfSlcbiAgICApLFxuICB9KSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNlID0gU3RhdGljPCh0eXBlb2YgcmVzcG9uc2UpWzIwMF0+O1xuIl19