using DevExpress.ExpressApp.Model;
using DevExpress.Persistent.Base;
using DevExpress.Persistent.BaseImpl;
using DevExpress.Persistent.Validation;
using DevExpress.Xpo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static DevExpress.CodeParser.VB.Preprocessor.Evaluator;
using System.Xml.Linq;
using CalcControlCoreXaf.Module.BusinessObjects.Classifiers;
using System.Threading.Channels;

namespace CalcControlCoreXaf.Module.BusinessObjects.MI_P16
{
    [ModelDefault("Caption", "К2 Прямое измерение, относительная погрешность"), NavigationItem("МИ П.16-2021")]
    public class K2DirectMeasurementRel : MI_P16Base
    {
        public K2DirectMeasurementRel(Session session) : base(session) { }

        //[DisplayName("Единица измерений")]
        //public dUnitKind UnitKind { get; set; }

        private double i_RelativeError;
        [DisplayName("Относительная погрешность [δ], %")]
        public double RelativeError
        {
            get { return Math.Round(i_RelativeError, Capacity); }
            set {
                bool changed = SetPropertyValue(nameof(RelativeError), ref i_RelativeError, value);
                if (!IsLoading && changed)
                    Calculation();
            }
        }
        //private int i_AbsoluteErrorCapacity;
        //[DisplayName("Разрядность погрешности")]
        //public int AbsoluteErrorCapacity
        //{
        //    get { return i_AbsoluteErrorCapacity; }
        //    set
        //    {
        //        bool changed = SetPropertyValue(nameof(AbsoluteErrorCapacity), ref i_AbsoluteErrorCapacity, value);
        //    }
        //}
        private double i_MeasurementResult;
        [DisplayName("Результат измерений X")]
        //[ImmediatePostData]
        public double MeasurementResult
        {
            get { return i_MeasurementResult; }
            set {
                bool changed = SetPropertyValue(nameof(MeasurementResult), ref i_MeasurementResult, value);
                if (!IsLoading && changed)
                    Calculation();
            }
        }

        private double i_UncertaintyBType;
        [DisplayName("Неопределённость по типу В")]
        public double UncertaintyBType
        {
            get { return i_UncertaintyBType; }
            set { SetPropertyValue(nameof(UncertaintyBType), ref i_UncertaintyBType, value); }
        }
        private double i_UncertaintyTotal;
        [DisplayName("Расчёт суммарной неопределённости")]
        public double UncertaintyTotal
        {
            get {
                i_UncertaintyTotal = GetUncertaintyTotal();
                return i_UncertaintyTotal; }
            set { SetPropertyValue(nameof(UncertaintyTotal), ref i_UncertaintyTotal, value); }
        }
        private double i_UncertaintyExpanded;
        [DisplayName("Расчёт расширенной неопределённости")]
        public double UncertaintyExpanded
        {
            get {
                i_UncertaintyExpanded = GetUncertaintyExpanded();
                return i_UncertaintyExpanded; }
            set { SetPropertyValue(nameof(UncertaintyExpanded), ref i_UncertaintyExpanded, value); }
        }
        //private string i_UncertaintyResult;
        //[DisplayName("Представление результатов оценивания неопределенности")]
        //public string UncertaintyResult
        //{
        //    get {
        //        i_UncertaintyResult = GetUncertaintyResult();
        //        return i_UncertaintyResult; }
        //    set { SetPropertyValue(nameof(UncertaintyResult), ref i_UncertaintyResult, value); }
        //}
        #region Methods
        //public override void OnIndexChanged()
        //{
        //    UnitKind = Index?.UnitKind;
        //}

        private void Calculation()
        {
            UncertaintyBType = RelativeError * MeasurementResult / (100 * Math.Sqrt(3));

        }
        private double GetUncertaintyTotal()
        {
            return UncertaintyBType;

        }
        private double GetUncertaintyExpanded()
        {
            return UncertaintyTotal * 2;

        }
        public override string GetUncertaintyResult()
        {
            //string measurementResult = MeasurementResult.ToString($"n{Capacity}");
            return $"({MeasurementResult.ToString($"n{Capacity}")} ± {UncertaintyExpanded.ToString($"n{Capacity}")}) " +
                $"{UnitKind?.Name??""}; k = 2; P = 0,95.";

        }
        #endregion
    }
}
