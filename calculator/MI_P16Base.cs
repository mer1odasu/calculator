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
using CalcControlCoreXaf.Module.BusinessObjects.Clients;
using DevExpress.CodeParser;

namespace CalcControlCoreXaf.Module.BusinessObjects.MI_P16
{
    [ModelDefault("Caption", "Базовый класс методики МИ П.16-2021")]
    [NonPersistent]
    public abstract class MI_P16Base : BaseObject
    {
        public MI_P16Base(Session session) : base(session) { }

        private Client i_Client;
        [DisplayName("Клиент")]
        public Client Client
        {
            get { return i_Client; }
            set { SetPropertyValue(nameof(Client), ref i_Client, value); }
        }

        private DateTime i_CalculationDate;
        [DisplayName("Дата проведения расчёта")]
        public DateTime CalculationDate
        {
            get { return i_CalculationDate; }
            set { SetPropertyValue(nameof(CalculationDate), ref i_CalculationDate, value); }
        }
        private dIndex i_Index;
        [DisplayName("Определяемый показатель")]
        public dIndex Index
        {
            get { return i_Index; }
            set { bool changed = SetPropertyValue(nameof(Index), ref i_Index, value);
                //if(!IsLoading && changed)
                //    OnIndexChanged();
            }
        }
        private dUnitKind i_UnitKind;
        [DisplayName("Единица измерений")]
        public dUnitKind UnitKind {
            get {
                i_UnitKind = GetUnitKind();
                return i_UnitKind; }
            set { SetPropertyValue(nameof(UnitKind), ref i_UnitKind, value); }
        }
        private int i_Capacity;
        [DisplayName("Разрядность")]
        public int Capacity
        {
            get { return i_Capacity; }
            set
            {
                SetPropertyValue(nameof(Capacity), ref i_Capacity, value);
            }
        }
        private string i_MethodName;
        [Size(-1), DisplayName("НД на метод")]
        public string MethodName
        {
            get { return i_MethodName; }
            set { SetPropertyValue(nameof(MethodName), ref i_MethodName, value); }
        }

        private ClientEmployee i_CalcProducedBy;
        [DisplayName("Расчёт произвёл")]
        [DataSourceCriteria("Client = '@this.Client'")]
        public ClientEmployee CalcProducedBy
        {
            get { return i_CalcProducedBy; }
            set { SetPropertyValue(nameof(CalcProducedBy), ref i_CalcProducedBy, value); }
        }
        
        private ClientEmployee i_CalcCheckedBy;
        [DisplayName("Расчёт проверил")]
        [DataSourceCriteria("Client = '@this.Client'")]
        public ClientEmployee CalcCheckedBy
        {
            get { return i_CalcCheckedBy; }
            set { SetPropertyValue(nameof(CalcCheckedBy), ref i_CalcCheckedBy, value); }
        }
        private DateTime i_CalcCheckDate;
        [DisplayName("Дата проверки расчёта")]
        public DateTime CalcCheckDate
        {
            get { return i_CalcCheckDate; }
            set { SetPropertyValue(nameof(CalcCheckDate), ref i_CalcCheckDate, value); }
        }
        private string i_UncertaintyResult;
        [Size(255), DisplayName("Представление результатов оценивания неопределенности")]
        public string UncertaintyResult
        {
            get
            {
                i_UncertaintyResult = GetUncertaintyResult();
                return i_UncertaintyResult;
            }
            set { SetPropertyValue(nameof(UncertaintyResult), ref i_UncertaintyResult, value); }
        }
        #region Methods
        public override void AfterConstruction()
        {
            base.AfterConstruction();
            CalculationDate = DateTime.Now.Date;
            MethodName = "МИ П.16-2021";
            Capacity = 2;
        }
        private dUnitKind GetUnitKind()
        {
            if (!IsLoading)
                return Index?.UnitKind;
            return null;
        }
        public abstract string GetUncertaintyResult();
        #endregion
    }
}
